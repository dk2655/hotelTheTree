import React, { useState } from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import one from '../assets/hotelPics/two.jpg';

function PaymentReview() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    return (

        <>
            <div className="relative flex flex-col min-h-screen bg-gray-100 p-6">
                {/* Back Button - Positioned at Top Left */}
                <Link to="/book" className="absolute top-6 left-6">
                    <IoIosArrowDropleftCircle className="text-black w-10 h-10" />
                </Link>

                {/* Page Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[Playfair] text-center mt-16">
                    Payment & Booking Review
                </h1>

                {/* Room Info Section */}
                <div className="flex items-center bg-white shadow-lg rounded-lg p-4 mt-8 w-full max-w-3xl mx-auto">
                    {/* Room Image */}
                    <img src={two} alt="Room" className="w-32 h-32 rounded-lg object-cover" />

                    {/* Room Details */}
                    <div className="ml-4">
                        <h2 className="text-xl font-semibold">Deluxe Room</h2>
                        <p className="text-gray-700">Hotel The Tree</p>
                        <p className="text-gray-500">Hinjewadi, Pune, India</p>
                    </div>
                </div>

                {/* Booking Details Section */}
                <div className="mt-8 font-bold text-lg mx-auto w-full max-w-3xl">
                    <h3>Your Booking</h3>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4 mt-2 w-full max-w-3xl mx-auto">
                    {/* Booking Date Range */}
                    <div className="flex flex-col mb-4">
                        <label className="text-gray-600 font-semibold">From</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="text-gray-600 font-semibold">To</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Guests Section */}
                    <div className="mt-4">
                        <h3 className="text-gray-800 font-bold">Guests</h3>

                        <div className="flex justify-between mt-2">
                            {/* Number of Adults */}
                            <div className="flex flex-col">
                                <label className="text-gray-600 font-semibold">Adults</label>
                                <select
                                    value={adults}
                                    onChange={(e) => setAdults(e.target.value)}
                                    className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                                >
                                    {[...Array(6).keys()].map((num) => (
                                        <option key={num + 1} value={num + 1}>
                                            {num + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Number of Children */}
                            <div className="flex flex-col">
                                <label className="text-gray-600 font-semibold">Children</label>
                                <select
                                    value={children}
                                    onChange={(e) => setChildren(e.target.value)}
                                    className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                                >
                                    {[...Array(5).keys()].map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center bg-white shadow-lg rounded-lg p-4 mt-8 w-full max-w-3xl mx-auto">
                    {/* Room Image */}
                    <img src={one} alt="Room" className="w-32 h-32 rounded-lg object-cover" />

                    {/* Room Details */}
                    <div className="ml-4 text-3xl">
                        <h2 className="text-xl font-semibold">Total cost</h2>
                        <p className="text-gray-700 font-bold">₹3500</p>

                    </div>
                </div>
            </div>

            {/* Separate Footer Section */}
            <div className="w-full bg-[#995f0d] text-white py-4 px-6 flex items-center justify-between">
                {/* Room Price */}
                <div className="text-xl font-semibold">
                    Room Price: ₹3,500
                </div>

                {/* Make Payment Button */}
                <button
                    className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                    Make Payment
                </button>
            </div>
        </>

    );
}

export default PaymentReview;
