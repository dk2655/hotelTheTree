import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Parallax } from 'swiper/modules';

import temp1 from '../assets/hotelPics/temp1.jpg'
import temp2 from '../assets/hotelPics/temp2.jpg'
import dining from '../assets/hotelPics/dining.jpg'
import room2 from '../assets/hotelPics/room2.jpg'

import gym from '../assets/hotelPics/gym.jpg';
import pool from '../assets/hotelPics/pool.jpg';
import restaurant from '../assets/hotelPics/restraunt.jpg';
import { Link } from 'react-router-dom';

function Amenities() {
    return (
        <div id='amenities' className='mt-[10%] px-[4%]'>
            <h2 className="text-[5vh] font-[playFair]">Luxury Amenities</h2>
            <h1 className="text-[7vh] mt-[2%]">
                Our Best <span className="text-[#9d7e54] font-bold">Amenities</span>
            </h1>

            <div className='text-white  relative w-full h-auto'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 2500 }}
                    parallax={true}
                    speed={1500}
                    modules={[Autoplay, Parallax]}
                    className='h-full w-full'
                >
                    {[{ image: temp2, title: 'Garden', desc: 'Elevate your satay! Our hotel serene garden offers lush greeenery and tranquil seating areas.' },
                    { image: room2, title: ' Rooms', desc: '  Dive into luxury! Our Deluxe rooms a perfect place for relaxation and leisure in a city like pune!' },
                    { image: dining, title: 'Dining', desc: 'Savor world-class flavors! Experience gourmet dining with exquisite dishes crafted by top chefs in a sophisticated ambiance.' }
                    ].map((amenity, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex items-center bg-transparent bg-opacity-80 p-6 rounded-xl '>
                                {/* Image Section */}
                                <div
                                    className='-ml-[4%] w-[100%] h-[54vh] rounded-r-full bg-cover bg-center'
                                    style={{ backgroundImage: `url(${amenity.image})` }}
                                >
                                    <h2 className='bg-transparent text-white backdrop-blur-xs object-cover py-[15%] md:py-[1%]
                                        text-[4.5vh] md:text-[5vh] font-bold text-left md:text-center  
                                        '>
                                        {amenity.title}
                                    </h2>

                                </div>

                                {/* Text Section */}
                                <div className='w-[50%] pl-8  text-left text-black'>
                                    <p className='text-lg mb-[23%]'>{amenity.desc}</p>
                                    <Link to="/book">
                                        <button className='bg-[#9d7e54] text-white px-6 py-2 rounded-lg hover:bg-[#7c5e3e] border-2 border-dashed border-'>
                                            Book Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Amenities;
