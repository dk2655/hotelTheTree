import React from "react";

function Footer() {
    return (
        <footer id="contact" className="bg-gray-900 text-white py-10 px-6 md:px-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

                {/* Column 1: Hotel Info */}
                <div>
                    <h2 className="text-2xl font-bold text-[#9d7e54]">The Tree Hotel</h2>
                    <p className="mt-3 text-gray-300">
                        Experience world-class hospitality and luxury amenities at The Tree Hotel. Your comfort is our priority.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div style={{ color: 'white' }}>
                    <h3 className="text-xl font-semibold text-[#9d7e54] mb-2">Quick Links</h3>
                    <ul className="space-y-2  " >
                        <li><a href="#" className="hover:text-[#9d7e54]">Home</a></li>
                        <li><a href="#" className="hover:text-[#9d7e54]">Rooms & Suites</a></li>
                        <li><a href="#" className="hover:text-[#9d7e54]">Amenities</a></li>
                        <li><a href="#" className="hover:text-[#9d7e54]">Dining</a></li>
                        <li><a href="#" className="hover:text-[#9d7e54]">Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 3: Branch Locations */}
                <div>
                    <h3 className="text-xl font-semibold text-[#9d7e54] mb-2">Branch Locations</h3>
                    <ul className="space-y-2 text-white">
                        <li>Pune, India</li>

                    </ul>
                </div>

                {/* Column 4: Contact Details */}
                <div>
                    <h3 className="text-xl font-semibold text-[#9d7e54] mb-2">Contact Us</h3>
                    <p><span className="font-bold">📍 Address:</span> The Tree Hotel, Bhoirwadi,Phase-3, Near TCS Company,Hinjwadi,Pune-411057</p>
                    <p><span className="font-bold">📧 Email:</span> info@thetreehotel.com</p>
                    <p><span className="font-bold">📞 Phone:</span> +91 91460-44999 </p>
                    <p className="ml-21"> +91 91460-74999</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} The Tree Hotel. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
