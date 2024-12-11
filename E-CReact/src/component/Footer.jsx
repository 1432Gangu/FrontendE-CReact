import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-xl font-semibold'>E-Shop</h3>
          <p>Your one-stop for all your needs. Shop with us and experience the best online shopping experience.</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul>
            <li>
              <Link to="/" className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link to="/shop" className='hover:underline'>ITEMS</Link>
            </li>
            <li>
              <Link to="/contact" className='hover:underline'>Contact</Link>
            </li>
            <li>
              <Link to="/about" className='hover:underline'>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>Follow Us</h4>
          <div className='flex space-x-4 mt-4'>
            <a href="#" className='hover:text-gray-400'><FaFacebook /></a>
            <a href="#" className='hover:text-gray-400'><FaTwitter /></a>
            <a href="#" className='hover:text-gray-400'><FaGithub /></a>
            <a href="#" className='hover:text-gray-400'><FaLinkedin /></a>
          </div>
          <form className='flex items-center justify-center mt-8'>
            <input 
              type="email" 
              placeholder='Enter email' 
              className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600' 
            />
            <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600'>
              Subscribe
            </button>
          </form>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-4'>
          <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy; 2024 e-shop All rights reserved.</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href="" className='hover:underlin'>Privacy Policy</a>
            <a href="" className='hover:underlin'>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
