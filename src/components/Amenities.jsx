import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Parallax } from 'swiper/modules';

import gym from '../assets/hotelPics/gym.jpg';
import pool from '../assets/hotelPics/pool.jpg';
import restaurant from '../assets/hotelPics/restraunt.jpg';
import { Link } from 'react-router-dom';

function Amenities() {
    return (
        <div className='mt-[10%] px-[4%]'>
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
                    {[{ image: gym, title: 'Gym', desc: 'Elevate your fitness! Our state-of-the-art gym is equipped with the latest machines to keep you energized and in top shap' },
                    { image: pool, title: 'Swimming Pool', desc: '  Dive into luxury! Our crystal-clear infinity pool offers a serene escape, perfect for relaxation and leisure under the sun.' },
                    { image: restaurant, title: 'Restaurant', desc: 'Savor world-class flavors! Experience gourmet dining with exquisite dishes crafted by top chefs in a sophisticated ambiance.' }
                    ].map((amenity, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex items-center bg-transparent bg-opacity-80 p-6 rounded-xl'>
                                {/* Image Section */}
                                <div
                                    className='-ml-[4%] w-[100%] h-[50vh] rounded-r-full bg-cover bg-center'
                                    style={{ backgroundImage: `url(${amenity.image})` }}
                                >
                                    <h2 className='bg-transparent bg-opacity-10  text-white  text-[5vh] font-bold text-center  py-4 '>
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
