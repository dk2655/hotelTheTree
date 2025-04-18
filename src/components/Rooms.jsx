import React from 'react';
import RoomCard from './RoomCard';
import room1 from '../assets/hotelPics/room1.jpg'
import room2 from '../assets/hotelPics/room2.jpg'

// import two from '../assets/hotelPics/two.jpg'

function Rooms(props) {
    return (
        <div id='rooms' className="rooms-section ml-[4%] space-y-2 sm:space-y-4">
            <h2 className="text-[5vh] font-[playFair] text-left">
                Luxury  Rooms
            </h2>
            <h1 className="text-[7vh] font-sans text-left mb-2 sm:mb-4">
                Our Best <span className="text-[#9d7e54] font-bold">Rooms</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16">
                {/* Deluxe Room Card */}
                <RoomCard
                    frontImage={room1}
                    backImage={room1}
                    roomType="Deluxe"
                    price={props.price}
                    features={[
                        'Daily Cleaning',
                        'Home Service',
                        'House Keeping',
                        'WiFi ',
                    ]}
                />

                {/* Super Deluxe Room Card */}
                <RoomCard
                    frontImage={room2}
                    backImage={room2}
                    roomType="Super Deluxe"
                    price={props.price}
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
