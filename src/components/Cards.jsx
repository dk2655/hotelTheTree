import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ icon: Icon, title, subheadings }) => {
    return (
        <div className=" w-[290px] h-[50%] p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-dashed border-[#9d7e54]">
            {/* Icon with animation */}
            <motion.div
                className="flex justify-center mb-4 text-[#9d7e54]"
                animate={{
                    rotate: [0, -10, 10, 0], // Shaking animation
                }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
            >
                <Icon size={50} />
            </motion.div>

            {/* Title */}
            <h2 className="text-xl font-bold text-center mb-4 text-gray-800">{title}</h2>

            {/* Subheadings */}
            <ul className="space-y-2">
                {subheadings.map((subheading, index) => (
                    <li
                        key={index}
                        className="text-gray-600 text-center hover:text-[#9d7e54] transition-colors duration-300"
                    >
                        {subheading}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Card;
