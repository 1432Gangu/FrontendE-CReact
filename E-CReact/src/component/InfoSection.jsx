import React from 'react';
import { GiMeatCleaver,GiChicken,GiChickenLeg,GiChickenOven,GiRoastChicken    } from 'react-icons/gi';

const InfoSection = () => {
    const infoItems = [
        {
            icon: <GiMeatCleaver className="text-3xl text-red-600" />,
            title: "Cuts your wish",
            description: "Get your orders delivered with no cost",
        },
        {
            icon: <GiChicken className="text-3xl text-red-600" />,
            title: "Support 24/7",
            description: "We are here to assist you anytime",
        },
        {
            icon: <GiChickenLeg  className="text-3xl text-red-600" />,
            title: "100% Money Back",
            description: "Full refund if you're not satisfied",
        },
        {
            icon: <GiChickenOven  className="text-3xl text-red-600" />,
            title: "Payment Secure",
            description: "Your payment is secure with us",
        },
        {
            icon: <GiRoastChicken  className="text-3xl text-red-600" />,
            title: "Best Discounts",
            description: "Enjoy the best prices on our products",
        }
    ];

    return (
        <div className="bg-white pb-8 pt-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {infoItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    >
                        {item.icon}
                        <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoSection;
