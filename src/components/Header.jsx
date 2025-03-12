import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Parallax } from 'swiper/modules';

import Reception from '../assets/hotelPics/Reception.jpg'
import reception1 from '../assets/hotelPics/reception1.jpg'
import Flower from '../assets/hotelPics/Flower.jpg'

// import hero1 from '../assets/hotelPics/hero1.png';
// import hero2 from '../assets/hotelPics/hero2.png';
// import hero3 from '../assets/hotelPics/hero3.png';

function Header() {
    return (
        <div id='home' className='text-white relative w-full h-[100vh]'>
            {/* Swiper Carousel */}
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 2500,
                }}
                parallax={true}
                speed={1500}
                modules={[Autoplay, Parallax]}
                className='h-full w-full'
            >
                {/* First Slide */}
                <SwiperSlide>
                    <div
                        className='h-full w-full bg-cover bg-center'
                        style={{
                            backgroundImage: `url(${reception1})`, // Use the imported image
                        }}
                    >
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F2F2F2] text-center bg-transparent bg-opacity-10 backdrop-blur-xs '>
                            <small data-swiper-parallax="-200" className='block text-lg'>Luxury Hotel & Restaurant</small>
                            <h2 data-swiper-parallax="-300" className='text-4xl font-extrabold'>
                                Enjoy Your Dream Time with <br /> Luxury Experience
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Second Slide */}
                <SwiperSlide>
                    <div
                        className='h-full w-full bg-cover bg-center'
                        style={{
                            backgroundImage: `url(${Flower})`, // Use the imported image
                        }}
                    >
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center bg-transparent bg-opacity-10 backdrop-blur-xs '>
                            <small data-swiper-parallax="-200" className='block text-lg'>Exclusive Suites</small>
                            <h2 data-swiper-parallax="-300" className='text-4xl font-extrabold'>
                                Enjoy Your Stay in the Best Deluxe Rooms <br /> With Exclusive Offers
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Third Slide */}
                <SwiperSlide>
                    <div
                        className='h-full w-full bg-cover bg-center'
                        style={{
                            backgroundImage: `url(${Reception})`, // Use the imported image
                        }}
                    >
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/6 text-white text-center bg-transparent bg-opacity-10 backdrop-blur-xs '>
                            <small data-swiper-parallax="-200" className='block text-lg'>Luxury Hotel & Restaurant</small>
                            <h2 data-swiper-parallax="-300" className='text-4xl font-extrabold'>
                                Enjoy Your Dream Time with <br /> Luxury Experience
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Header;