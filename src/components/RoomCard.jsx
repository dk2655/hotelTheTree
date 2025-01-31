import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ frontImage, backImage, roomType, price, features }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="relative w-[300px] h-[350px] lg:w-[350px] lg:h-[450px] perspective">
            {/* Card Container */}
            <div
                className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''
                    }`}
            >
                {/* Front Side */}
                <div
                    className="absolute w-full h-full backface-hidden rounded-xl shadow-lg"
                    style={{
                        backgroundImage: `url(${frontImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="flex flex-col justify-end h-full p-4">
                        <button
                            onClick={toggleCard}
                            className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-200 mt-auto"
                        >
                            {roomType}
                        </button>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute w-full h-full rotate-y-180 backface-hidden rounded-xl shadow-lg"
                    style={{
                        backgroundImage: `url(${backImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Glass Effect Container */}
                    <div className="absolute inset-4 flex flex-col items-center justify-between bg-transparent bg-opacity-20 backdrop-blur-md rounded-xl p-6 overflow-hidden border border-white border-opacity-10">
                        {/* Text Content */}
                        <div className="text-center space-y-4">
                            <h3 className="text-white text-2xl font-bold">${price}</h3>
                            <h2 className="text-white text-xl font-semibold">{roomType}</h2>
                            <ul className="text-white text-base space-y-2">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        • {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between w-full mt-auto">
                            <Link to="/book">
                                <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-200">
                                    Book Now
                                </button>
                            </Link>
                            <button
                                onClick={toggleCard}
                                className="text-white text-2xl font-bold transform hover:scale-110"
                            >
                                ↩
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
