import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from "react-icons/io";

function BookNow() {
    const [formData, setFormdata] = useState({
        name: '',
        dob: '',
        email: '',
        phone: '',
        countryCode: '+91', // Default country code for India
    });

    const fields = [
        { label: 'Name', type: 'text', name: 'name', placeholder: 'divmax' },
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
        // Add more country codes as needed
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
    }

    return (
        <div className="relative h-screen bg-gray-100 p-6">
            {/* Back Button in the Top-Left Corner */}
            <Link to="/" className="absolute top-4 left-4">
                <IoIosArrowDropleftCircle className="text-black w-8 h-8" />
            </Link>

            {/* Page Content */}
            <div className="mt-[5%] h-[10%] w-full flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-6xl sm:text-2xl font-bold font-[playFair]">Personal Information</h1>
            </div>

            <div className="mt-[8%] flex flex-col items-center justify-center space-y-6">
                <form className="w-full max-w-md space-y-4">
                    {fields.map((field) => (
                        <div key={field.name} className="relative flex flex-col w-full mb-6">
                            {/* Heading above the input */}
                            <h2 className="text-lg font-semibold mb-2">{field.label}</h2>

                            {/* Phone Input with Country Code */}
                            {field.name === 'phone' && (
                                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                                    {/* Country Code Dropdown */}
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="px-4 py-2 border-r-2 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {countryCodes.map((country) => (
                                            <option key={country.code} value={country.code}>
                                                {country.code} {country.name}
                                            </option>
                                        ))}
                                    </select>

                                    {/* Phone Number Input */}
                                    <input
                                        id={field.name}
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        className="px-4 py-2 w-full rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            )}

                            {/* Other Inputs */}
                            {field.name !== 'phone' && (
                                <input
                                    id={field.name}
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    className="px-4 py-2 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            )}
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
}

export default BookNow;
