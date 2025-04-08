import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from "react-icons/io";

function BookNow() {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        phone: '',
        countryCode: '+91', // Default country code for India
        roomType: '',
    });

    const fields = [
        { label: 'Name', type: 'text', name: 'name', placeholder: 'Enter Your Name' },
        { label: 'Date of Birth', type: 'date', name: 'dob', placeholder: '' },
        { label: 'Email', type: 'email', name: 'email', placeholder: 'tree@gmail.com' },
        { label: 'Phone', type: 'tel', name: 'phone', placeholder: '9900667722' },
    ];

    const countryCodes = [
        { code: '+1', name: 'USA' },
        { code: '+91', name: 'India' },
        { code: '+44', name: 'UK' },
        { code: '+61', name: 'Australia' },
        { code: '+81', name: 'Japan' },
    ];

    const roomTypes = [
        { type: 'Deluxe Room', price: 2500 },
        { type: 'Semi-Deluxe Room', price: 2000 },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const getRoomPrice = () => {
        const selectedRoom = roomTypes.find((room) => room.type === formData.roomType);
        return selectedRoom ? selectedRoom.price : 'N/A';
    };

    const handleSubmit = () => {
        // console.log("handleSubmit function triggered!"); // Debugging log

        // Check if all fields are completely empty
        const isFormEmpty =
            !formData.name &&
            !formData.dob &&
            !formData.email &&
            !formData.phone &&
            !formData.roomType &&
            !startDate &&
            !endDate;

        if (isFormEmpty) {
            alert("Form is empty! Please fill in the details before proceeding.");
            return;
        }

        // Check if any required field is missing
        if (!formData.name || !formData.dob || !formData.email || !formData.phone || !formData.roomType || !startDate || !endDate) {
            alert("Please fill in all required fields before continuing.");
            return;
        }
        localStorage.setItem("roomType", formData.roomType);
        localStorage.setItem("roomPrice", getRoomPrice());
        localStorage.setItem("name", formData.name);
        localStorage.setItem("email", formData.email);
        localStorage.setItem("phone", formData.phone)

        alert("Booking Successful! Redirecting to payment page.");

        navigate('/payment');
    };



    return (
        <div className="relative min-h-screen bg-gray-100 p-6 pb-24">
            <Link to="/" className="absolute top-4 left-4">
                <IoIosArrowDropleftCircle className="text-black w-8 h-8" />
            </Link>

            <div className="mt-12 flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-6xl font-bold">Booking Details</h1>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center">
                <form className="w-full max-w-md space-y-6">
                    {fields.map((field) => (
                        <div key={field.name} className="flex flex-col w-full">
                            <h2 className="text-lg font-semibold mb-2">{field.label}</h2>
                            {field.name === 'phone' ? (
                                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="px-4 py-2 border-r-2 border-gray-300 rounded-l-lg"
                                        required
                                    >
                                        {countryCodes.map((country) => (
                                            <option key={country.code} value={country.code}>
                                                {country.code} {country.name}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        id={field.name}
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        className="px-4 py-2 w-full rounded-r-lg"
                                        required
                                    />
                                </div>
                            ) : (
                                <input
                                    id={field.name}
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    className="px-4 py-2 w-full border-2 border-gray-300 rounded-lg"
                                    required
                                />
                            )}
                        </div>
                    ))}

                    <div className="flex flex-col w-full">
                        <h2 className="text-lg font-semibold mb-2">Select Your Room</h2>
                        <select
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleChange}
                            className="px-4 py-2 border-2 border-gray-300 rounded-lg"
                            required
                        >
                            <option value="">Choose a room type</option>
                            {roomTypes.map((room, index) => (
                                <option key={index} value={room.type}>
                                    {room.type}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-[#003153] text-white p-2 flex items-center justify-between">
                <div className="text-xl font-semibold">Room Price: ₹{getRoomPrice()}</div>
                <button
                    onClick={handleSubmit}
                    className="bg-white text-black  px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
                // disabled={!formData.roomType}
                >
                    Continue
                </button>
            </div>

            <div className="mt-8 font-bold text-lg sm:mx-[8%] w-full max-w-3xl">
                <h3>Your Booking Dates</h3>
            </div>

            <div className="flex flex-col gap-y-4 bg-white shadow-lg rounded-lg p-2 mt-2 w-full h-[40vh] sm:mx-[8%]">
                <div className='flex flex-col'>
                    <label className="text-gray-600 p-2 font-semibold">From</label>
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border border-gray-300 p-2 rounded-md" required />

                </div>

                <div className='flex flex-col'>
                    <label className="text-gray-600 font-semibold">To</label>
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border border-gray-300 p-2 rounded-md" required />
                </div>

                <div className="flex flex-col gap-y-4 mt-4">
                    <div className="flex flex-col">
                        <label className="text-gray-600 font-semibold">Adults</label>
                        <select value={adults} onChange={(e) => setAdults(e.target.value)} className="border border-gray-300 p-2 rounded-md" required>
                            {[...Array(6).keys()].map((num) => <option key={num + 1} value={num + 1}>{num + 1}</option>)}
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-600 font-semibold">Children</label>
                        <select value={children} onChange={(e) => setChildren(e.target.value)} className="border border-gray-300 p-2 rounded-md" required>
                            {[...Array(5).keys()].map((num) => <option key={num} value={num}>{num}</option>)}
                        </select>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default BookNow;



