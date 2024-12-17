import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ItemEdit from './Admnin/ItemEdit';

function Navbar() {
  const products = useSelector((state) => state.cart.products);
  const navigate = useNavigate();

  const handleLoginRegisterClick = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <nav className="bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-md">
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="text-2xl font-extrabold text-gray-800 tracking-wide hover:text-red-500 transition duration-300">
        <Link to="/">E-Shop</Link>
      </div>
  
      {/* Search Bar Section */}
      <div className="relative flex-1 mx-4 hidden md:block">
        <form>
          <input
            type="text"
            placeholder="Search Product"
            className="w-full border border-gray-300 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <FaSearch className="absolute top-2.5 right-4 text-gray-500 hover:text-gray-700 transition duration-300 text-lg" />
        </form>
      </div>
  
      {/* User Actions Section */}
      <div className="flex items-center space-x-6">
        {/* Cart Icon */}
        <Link
          to="/cart"
          className="relative text-gray-700 hover:text-red-500 transition duration-300"
        >
          <FaShoppingCart className="text-2xl" />
          {products.length > 0 && (
            <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
              {products.length}
            </span>
          )}
        </Link>
  
        {/* Login/Register Button */}
        <button
          className="hidden md:block bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-red-500 transition duration-300"
          onClick={handleLoginRegisterClick}
        >
          Login | Register
        </button>
  
        {/* Mobile Menu User Icon */}
        <button className="block md:hidden text-gray-700 hover:text-red-500 transition duration-300">
          <FaUser className="text-2xl" />
        </button>
      </div>
    </div>
  
    {/* Navigation Links Section */}
    <div className="bg-gradient-to-r from-red-100 via-white to-red-100 py-3">
      <div className="container mx-auto flex justify-center space-x-8 text-sm font-medium text-gray-700">
        <Link to="/Home" className="hover:text-red-500 transition duration-300">
          Home
        </Link>
        <Link to="/shop" className="hover:text-red-500 transition duration-300">
          Items
        </Link>
        <Link to="/Contact" className="hover:text-red-500 transition duration-300">
          Contact
        </Link>
        {/* <Link to="/ItemEdit" className="hover:text-red-500 transition duration-300">
          Item Edit
        </Link> */}
      </div>
    </div>
  </nav>
  
  
  );
}

export default Navbar;
