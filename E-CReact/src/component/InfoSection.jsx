import React from 'react';
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
import { MdNoMeals } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";

const InfoSection = () => {
    const infoItems = [
        {
            icon: <MdOutlineDeliveryDining className="text-3xl text-red-600" />,
            title: "Cuts of Your Choice",
            description: "Order precisely what you love, delivered for free.",
        },
        {
            icon: <FcCustomerSupport className="text-3xl text-red-600" />,
            title: "24/7 Customer Support",
            description: "We are always here to help you.",
        },
        {
            icon: <MdNoMeals className="text-3xl text-red-600" />,
            title: "100% Satisfaction Guarantee",
            description: "Enjoy your meals or get your money back.",
        },
        {
            icon: <RiSecurePaymentFill className="text-3xl text-red-600" />,
            title: "Secure Payment",
            description: "Your payments are safe and protected.",
        },
        {
            icon: <GiTakeMyMoney className="text-3xl text-red-600" />,
            title: "Exclusive Discounts",
            description: "Save big with the best offers on delicious food.",
        },
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
