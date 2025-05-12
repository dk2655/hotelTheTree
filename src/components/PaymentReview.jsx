import React, { useState } from 'react';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import room2 from '../assets/hotelPics/room2.jpg';
import emailjs from '@emailjs/browser';
import { load } from '@cashfreepayments/cashfree-js'; // Import the SDK

function PaymentReview() {
    const [loading, setLoading] = useState(false);

    const storedRoomType = localStorage.getItem("roomType") || "Room type not selected";
    const storedRoomPrice = localStorage.getItem("roomPrice") || 0;
    const storedUserName = localStorage.getItem("name") || "Guest";
    const storedEmail = localStorage.getItem("email") || "guest@email.com";
    const storedPhone = localStorage.getItem("phone") || "9999999999";

    const handlePayment = async () => {
        if (!storedPhone) {
            alert("Phone number not found. Please fill in your booking details again.");
            return;
        }

        const emailParams = {
            name: storedUserName,
            email: storedEmail,
            roomType: storedRoomType,
            price: storedRoomPrice,
            hotelName: "Hotel The Tree",
            location: "Hinjewadi, Pune, India",
        };

        try {
            setLoading(true);

            // Create order and retrieve payment session ID from serverless function
            const response = await fetch('/api/createOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: storedUserName,
                    email: storedEmail,
                    phone: storedPhone,
                    roomType: storedRoomType,
                    amount: storedRoomPrice,
                }),
            });

            const result = await response.json();
            const paymentSessionId = result?.payment_session_id;

            if (!paymentSessionId) {
                console.error("Missing session ID:", result);
                alert("Failed to generate payment session.");
                return;
            }

            // Send confirmation email
            await emailjs.send(
                "service_229t579",
                "template_5uwftjf",
                emailParams,
                "qb4MJrPgzVN8h0_sX"
            );

            // Load Cashfree SDK in production mode (use sandbox for test keys)
            const cashfree = await load({
                mode: "production", // Use "sandbox" if using test keys
            });

            if (cashfree) {
                // Initiate the payment process
                await cashfree.checkout({
                    paymentSessionId,
                    redirectTarget: "_self", // Use "_self" or "_modal" depending on your UI preference
                });
            } else {
                throw new Error("Failed to load Cashfree SDK.");
            }

        } catch (error) {
            console.error("Payment error:", error);
            alert("Payment initiation failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="relative flex flex-col min-h-screen bg-gray-100 p-6">
                <Link to="/book" className="absolute top-6 left-6">
                    <IoIosArrowDropleftCircle className="text-black w-10 h-10" />
                </Link>

                <h1 className="text-4xl font-bold text-center mt-20">Payment & Booking Review</h1>

                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 mt-12 w-full max-w-3xl mx-auto">
                    <img src={room2} alt="Room" className="w-full h-32 rounded-lg object-cover" />
                    <div className="text-left mt-6 w-full">
                        <h2 className="text-3xl font-semibold">{storedRoomType}</h2>
                        <p className="text-gray-700 text-xl">Hotel The Tree</p>
                        <p className="text-gray-500 text-md">Hinjewadi, Pune, India</p>
                    </div>
                </div>

                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 mt-6 w-full max-w-3xl mx-auto">
                    <div className="text-left w-full">
                        <h2 className="text-xl font-semibold">Total cost</h2>
                        <p className="text-2xl font-bold text-black">₹{storedRoomPrice}</p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#003153] text-white py-4 px-6 flex items-center justify-between">
                <div className="text-xl font-semibold">
                    Room Price: ₹{storedRoomPrice}
                </div>
                <button
                    onClick={handlePayment}
                    className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Proceed to Pay"}
                </button>
            </div>
        </>
    );
}

export default PaymentReview;
