import React, { useEffect, useState } from 'react';
import { RiMenu4Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const togglebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle smooth scrolling
    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // Close mobile menu after clicking a link
    };

    return (
        <>
            {/* Navbar: Fixed to the top */}
            <div className="fixed top-0 left-0 right-0 z-20 bg-transparent shadow-none">
                {/* Outer container for Nav */}
                <div className="flex items-center justify-between px-[5%] py-4">
                    {/* Logo */}
                    <h3 className={`text-[3vw] font-extrabold ${isScrolled ? 'text-[#9d7e54]' : 'text-white'}`}>
                        The Tree
                    </h3>

                    {/* Navigation Links for larger screens */}
                    <div className="hidden md:flex">
                        <nav className="text-white flex gap-7">
                            {["home", "about", "rooms", "amenities", "Founders", "contact"].map((link, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleScrollToSection(link)} // Use onClick to scroll
                                    className={`text-[3.5vh] transition-all duration-300 shadow-md hover:scale-110 hover:text-[5vh]`}
                                    style={{ color: isScrolled ? '#9d7e54' : 'white' }}
                                >
                                    {link.charAt(0).toUpperCase() + link.slice(1)} {/* Capitalize first letter */}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Button and Menu Icon */}
                    <div className="flex items-center gap-4">
                        <Link to="/book">
                            <button
                                className="border border-dashed border-white px-[5%] py-[8%] whitespace-nowrap rounded-md bg-[#995f0d] text-white hover:bg-[#7d6139] hover:border-white transition-all duration-300 shadow-lg transform hover:scale-110"
                            >
                                Book Now
                            </button>
                        </Link>
                        {/* Menu Icon for smaller screens */}
                        <div className="md:hidden">
                            <button onClick={togglebar}>
                                <RiMenu4Line size={30} className="text-white bg-[#995f0d] rounded-sm" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="fixed inset-0 bg-transparent bg-opacity-70 backdrop-blur-md z-30 flex flex-col items-center justify-center gap-6">
                        {["home", "about", "rooms", "amenities", "Founders", "contact"].map((link, index) => (
                            <button
                                key={index}
                                onClick={() => handleScrollToSection(link)} // Use onClick to scroll
                                className="text-[8vw] text-white bg-black/50 rounded-2xl transition-all duration-300 shadow-md"
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1)} {/* Capitalize first letter */}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Nav;