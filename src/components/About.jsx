import React, { useState } from 'react';
// import aboutOne from '../assets/hotelPics/aboutOne.png';
import mergepic from '../assets/hotelPics/mergepic.png'


function About() {

    const [isTapped, setIsTapped] = useState(false);


    return (
        <div id='about' className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center lg:gap-12 p-6 lg:p-16">
            {/* Image Section */}
            <div className="flex-shrink-0">
                <img className="mt-[-38%] ml-[0%] h-[50vh] lg:h-[100vh] w-[500px] lg:w-[500px] rounded-lg" src={mergepic} alt="The Tree Hotel" />
            </div>

            {/* Text Section */}
            <div className="flex-grow mt-8 lg:mt-0">
                <h4 className="font-[playFair] text-[4vh] font-extrabold text-[#9d7e54]">
                    The Tree Hotel
                </h4>
                <h2 className="font-sans text-[2.5vh] font-light mt-2">
                    Where elegance meets{' '}
                    <span className="text-[#9d7e54] font-bold">excellence</span>
                </h2>
                <p className="mt-4 text-gray-900">
                    Experience the perfect combination of sophistication, style, and comfort at The Tree Hotel.
                    Whether you're here for a relaxing getaway or a business retreat, we ensure a delightful experience.
                </p>

                {/* Round Boxes Section */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                        { title: 'Luxury Rooms', description: 'Spacious and elegant rooms with modern amenities.' },
                        { title: 'Fine Dining', description: 'Experience multi cuisine crafted by top chefs.' },
                        { title: 'Lush Green Garden', description: 'Relax and rejuvenate in our garden.' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-[#9d7e54] bg-[#f8f3eb]shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"


                        >
                            <h5 className="text-[#9d7e54] text-[2.5vh] font-bold">{item.title}</h5>
                            <p className="text-gray-900 text-center text-[2vh] mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
