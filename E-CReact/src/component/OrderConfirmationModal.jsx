import React from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmationModal = ({ isModalOpen, setIsModalOpen, cart, address }) => {
    const navigate = useNavigate(); 

    
    const closeModal = () => {
        setIsModalOpen(false);
    };

   
    const handleConfirmOrder = () => {
        alert("Your order has been confirmed!");
        closeModal();
        navigate("/Shop"); 
    };

    return (
        <>
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 
                     animate-fadeIn"
                >
                    <div
                        className="bg-white p-8 rounded-lg shadow-2xl w-96 
                       transform transition-all duration-300 scale-95 hover:scale-100"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                            Confirm Your Order
                        </h2>
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg text-gray-700">Shipping Address:</h3>
                            <p className="text-gray-600 mt-2">{address}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg text-gray-700">Order Summary:</h3>
                            <div className="text-gray-600 mt-2">
                                {cart.products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex justify-between items-center mb-2 border-b pb-1"
                                    >
                                        <span>{product.name} (x{product.quantity})</span>
                                        <span className="font-medium text-gray-800">
                                            ${(product.price * product.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Total Price</span>
                            <span className="text-green-500 font-semibold">${cart.totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mt-6">
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 
                           transition-all duration-300"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 
                           transform hover:scale-105 transition-transform duration-300 
                           animate-pulse"
                                onClick={handleConfirmOrder}
                            >
                                Confirm Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderConfirmationModal;
