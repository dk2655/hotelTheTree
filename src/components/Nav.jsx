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
                            {["Home", "About", "Rooms", "Amenities", "Employees", "Contact"].map((link, index) => (
                                <a
                                    key={index}
                                    href={`#${link.toLowerCase()}`} // Use anchor links
                                    className={`text-[3.5vh] transition-all duration-300 shadow-md hover:scale-110 hover:text-[5vh]`}
                                    style={{ color: isScrolled ? '#9d7e54' : 'white' }}
                                >
                                    {link}
                                </a>
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
                        {["Home", "About", "Rooms", "Amenities", "Employees", "Contact"].map((link, index) => (
                            <a
                                key={index}
                                href={`#${link.toLowerCase()}`} // Use anchor links
                                className="text-[5vw] text-white transition-all duration-300 shadow-md"
                                onClick={() => setIsOpen(false)} // Close menu on click
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Nav;