import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import emp1 from '../assets/hotelPics/emp1.jpg';
import emp2 from '../assets/hotelPics/emp2.jpg';
import emp3 from '../assets/hotelPics/emp3.jpg';
import founder1 from '../assets/hotelPics/founder1.png'

function Employees() {
    return (
        <div id='employees' className='mt-[10%] px-[4%]'>
            <h2 className="text-[5vh] font-[playFair]">Employees</h2>
            <h1 className="text-[7vh] mt-[2%]">
                Our <span className="text-[#9d7e54] font-bold">Employees</span>
            </h1>
            <div className='text-white relative w-full h-auto'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 2500 }}
                    speed={1500}
                    modules={[Autoplay]}
                    className='h-full w-full'
                >
                    {[{ image: founder1, name: 'Riya', designation: 'Sales Manager', desc: 'Elevate your fitness! Our state-of-the-art gym is equipped with the latest machines to keep you energized and in top shape.' },
                    { image: emp2, name: 'John', designation: 'Marketing Head', desc: 'Dive into luxury! Our crystal-clear infinity pool offers a serene escape, perfect for relaxation and leisure under the sun.' },
                    { image: emp3, name: 'Catherine', designation: 'Chef', desc: 'Savor world-class flavors! Experience gourmet dining with exquisite dishes crafted by top chefs in a sophisticated ambiance.' }
                    ].map((employee, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col items-center bg-transparent bg-opacity-80 p-6 rounded-xl'>
                                {/* Image Section */}
                                <img
                                    className='w-[80%] h-[100%] max-h-[400px] rounded-t-full object-contain mb-4'
                                    src={employee.image}
                                    alt={employee.name}
                                />

                                {/* Designation */}
                                <h3 className='text-xl font-semibold text-[#9d7e54]'>{employee.designation}</h3>

                                {/* Employee Name */}
                                <h2 className='text-[5vh] font-bold text-black mt-2'>{employee.name}</h2>

                                {/* Description with glass effect */}
                                <p className='text-2xl text-center text-black mt-2 mb-[20%] p-4 rounded-xl backdrop-blur-md bg-black/10'>
                                    {employee.desc}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Employees;
