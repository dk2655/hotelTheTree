import React from 'react';
import RoomCard from './RoomCard';
import one from '../assets/hotelPics/one.jpg';
import two from '../assets/hotelPics/two.jpg'

function Rooms() {
    return (
        <div className="ml-[4%] space-y-2 sm:space-y-4">
            <h2 className="text-[5vh] font-[playFair] text-left">
                Luxury Suites
            </h2>
            <h1 className="text-[7vh] font-sans text-left mb-2 sm:mb-4">
                Our Best <span className="text-[#9d7e54] font-bold">Rooms</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16">
                {/* Deluxe Room Card */}
                <RoomCard
                    frontImage={one}
                    backImage={two}
                    roomType="Deluxe"
                    price="299/N"
                    features={[
                        'Daily Cleaning',
                        'Home Service',
                        'House Keeping',
                        'WiFi ',
                    ]}
                />

                {/* Super Deluxe Room Card */}
                <RoomCard
                    frontImage={one}
                    backImage={two}
                    roomType="Super Deluxe"
                    price="499/N"
                    features={[
                        'Daily Cleaning',
                        'Home Service',
                        'House Keeping',
                        'WiFi & Parking',
                    ]}
                />
            </div>
        </div>
    );
}

export default Rooms;
