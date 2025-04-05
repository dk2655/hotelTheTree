import React, { useState } from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import room2 from '../assets/hotelPics/room2.jpg'
import emailjs from '@emailjs/browser'


function PaymentReview() {
    const storedRoomType = localStorage.getItem("roomType") || "  Room type not selected";
    const storedRoomPrice = localStorage.getItem("roomPrice") || 0;
    const storedUserName = localStorage.getItem("name") || "Guest";
    const storedEmail = localStorage.getItem("email") || "guest@email.com";
    const handlePayment = async () => {
        const emailParams = {
            name: storedUserName,
            email: storedEmail,
            roomType: storedRoomType,
            price: storedRoomPrice,
            hotelName: "Hotel The Tree",
            location: "Hinjewadi, Pune, India",
        };

        try {
            // Step 1: Create payment link via Netlify function
            const response = await fetch('/.netlify/functions/createPayment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: storedUserName,
                    email: storedEmail,

                    roomType: storedRoomType,
                    amount: storedRoomPrice
                })
            });

            const result = await response.json();
            console.log("Payment Link Response:", result);

            if (result.payment_link || result.payment_link_url) {
                // Optional: send email before redirect
                await emailjs.send(
                    "service_229t579",
                    "template_5uwftjf",
                    { ...emailParams },
                    "qb4MJrPgzVN8h0_sX"
                );

                alert("Redirecting to payment...");
                window.location.href = result.payment_link || result.payment_link_url;
            } else {
                alert("Payment link could not be generated.");
                console.error(result);
            }
        } catch (error) {
            console.error("Payment initiation failed:", error);
            alert("Failed to initiate payment.");
        }
    };



    return (

        <>
            <div className="relative flex flex-col min-h-screen bg-gray-100 p-6">
                {/* Back Button - Positioned at Top Left */}
                <Link to="/book" className="absolute top-6 left-6">
                    <IoIosArrowDropleftCircle className="text-black w-10 h-10" />
                </Link>

                {/* Page Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[Playfair] text-center mt-20">
                    Payment & Booking Review
                </h1>

                {/* Room Info Section */}
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 mt-20 w-full max-w-3xl mx-auto">
                    {/* Room Image */}
                    <img src={room2} alt="Room" className="w-full h-32 rounded-lg object-cover " />

                    {/* Room Details */}
                    <div className="mr-[50%] mt-6">
                        <h2 className=" text-3xl font-semibold">{storedRoomType}</h2>
                        <p className="text-gray-700 text-2xl">Hotel The Tree</p>
                        <p className="text-gray-500 text-xl">Hinjewadi, Pune, India</p>
                    </div>
                </div>





                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 mt-12 w-full max-w-3xl mx-auto">
                    {/* Room Image */}
                    <img src={room2} alt="Room" className="w-full h-32 rounded-lg object-cover" />

                    {/* Room Details */}
                    <div className="mt-6 mr-[75%] text-3xl">
                        <h2 className="text-xl font-semibold">Total cost</h2>
                        <p className="text-gray-700 font-bold">₹{storedRoomPrice}</p>

                    </div>
                </div>
            </div >

            {/* Separate Footer Section */}
            < div className="w-full bg-[#003153] text-white py-4 px-6 flex items-center justify-between" >
                {/* Room Price */}
                < div className="text-xl font-semibold" >
                    Room Price: ₹{storedRoomPrice}
                </div >

                {/* Make Payment Button */}
                < button
                    onClick={handlePayment}
                    className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                    Make Payment
                </button >
            </div >
        </>

    );
}

export default PaymentReview;
