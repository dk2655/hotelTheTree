// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay } from 'swiper/modules';

// import founder1 from '../assets/hotelPics/founder1.png'

// function Founders() {
//     return (
//         <div id='founders' className='mt-[10%] px-[4%]'>
//             <h2 className="text-[5vh] font-[playFair]">Founders</h2>
//             <h1 className="text-[7vh] mt-[2%]">
//                 The <span className="text-[#9d7e54] font-bold">Founders</span>
//             </h1>
//             <div className='text-white relative w-full h-auto'>
//                 <Swiper
//                     slidesPerView={1}
//                     spaceBetween={20}
//                     loop={true}
//                     autoplay={{ delay: 2500 }}
//                     speed={1500}
//                     modules={[Autoplay]}
//                     className='h-full w-full'
//                 >
//                     {[{ image: founder1, name: 'Anil Bharne', designation: 'Founder', desc: 'Mr. Anil Bharne, the founder of The Tree Hotel, has crafted a haven of luxury and comfort. His vision brings world-class hospitality with elegance and excellence.' },
//                     { image: founder1, name: 'Anil Bharne', designation: 'Founder', desc: 'Mr. Anil Bharne, the founder of The Tree Hotel, has crafted a haven of luxury and comfort. His vision brings world-class hospitality with elegance and excellence.' },
//                     { image: founder1, name: 'Anil Bharne', designation: 'Founder', desc: "Mr. Anil Bharne, the founder of The Tree Hotel, has crafted a haven of luxury and comfort. His vision brings world-class hospitality with elegance and excellence." }
//                     ].map((founders, index) => (
//                         <SwiperSlide key={index}>
//                             <div className='flex flex-col items-center bg-transparent bg-opacity-80 p-6 rounded-xl'>
//                                 {/* Image Section with Enlarged Size and Square Beige Background */}
//                                 <div className='w-[90%] max-w-[500px] h-[300px] bg-black/50 p-4 rounded-xl flex justify-center items-center'>
//                                     <img
//                                         className='w-full h-auto max-h-[500px] rounded-t-full object-contain'
//                                         src={founders.image}
//                                         alt={founders.name}
//                                     />
//                                 </div>

//                                 {/* Designation */}
//                                 <h3 className='text-xl font-semibold text-[#9d7e54] mt-4'>{founders.designation}</h3>

//                                 {/* founders Name */}
//                                 <h2 className='text-[5vh] font-bold text-black mt-2'>{founders.name}</h2>

//                                 {/* Description with glass effect */}
//                                 <p className='text-2xl text-center text-black mt-2 mb-[20%] p-4 rounded-xl backdrop-blur-md bg-black/10'>
//                                     {founders.desc}
//                                 </p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// }

// export default Founders;
