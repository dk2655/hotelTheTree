import React from 'react';
import Card from './Cards';
import { MdRestaurantMenu } from 'react-icons/md';

function ServicesDesc() {
    return (
        <div className=" mt-[5%]  ">
            <div className="ml-[4%]">
                <h2 className="text-[5vh] font-[playFair]">Facilities</h2>
                <h1 className="text-[7vh] mt-[2%]">
                    Our Best <span className="text-[#9d7e54] font-bold">Services</span>
                </h1>
            </div>

            <div className=" flex flex-wrap  gap-9 justify-center bg-white min-h-screen py-10">
                <Card
                    icon={MdRestaurantMenu} // Pass the component here
                    title="Dining Options"
                    subheadings={['Cafe', 'Restaurant', 'Bar', 'Room Service']}
                />
                <Card
                    icon={MdRestaurantMenu} // Pass the component here
                    title="Dining Options"
                    subheadings={['Cafe', 'Restaurant', 'Bar', 'Room Service']}
                />
                <Card
                    icon={MdRestaurantMenu} // Pass the component here
                    title="Dining Options"
                    subheadings={['Cafe', 'Restaurant', 'Bar', 'Room Service']}
                />
                <Card
                    icon={MdRestaurantMenu} // Pass the component here
                    title="Dining Options"
                    subheadings={['Cafe', 'Restaurant', 'Bar', 'Room Service']}
                />
            </div>
        </div>
    );
}

export default ServicesDesc;
