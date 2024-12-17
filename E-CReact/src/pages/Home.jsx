import React, { useEffect } from 'react';
import { categories, mocData } from '../assets/mocData';
import New from '../assets/Images/New.webp';
import InfoSection from '../component/InfoSection';
import CategorySection from '../component/CategorySection';
import { setProducts } from '../redux/productSlice';
import {useDispatch, useSelector} from "react-redux";
import ProducteCurd from '../component/ProducteCurd';
import Shop from './Shop';

function Home() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  useEffect(() =>{
    dispatch(setProducts(mocData))
    
  }, [])
  return (
    <div>
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        {/* Categories Section */}
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">SHOP BY CATEGORIES</div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Image Section */}
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={New} alt="Hero Image" className="w-full h-full object-cover" />
          <div className="absolute top-16 left-8">
            <p className="text-5xl font-bold text-white">FOOD ORDER APP</p>
            <h2 className="text-4xl font-bold text-red" >PLACE YOUR ORDER WHAT YOU WANT</h2>
            <p className="text-3xl font-bold">MILLION+ ITEMS</p>
            <button className="bg-red-600 px-8 py-2 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <InfoSection /> 
      <CategorySection />
      <div className='container mx-auto py-12'>
        <h1 className='text-2x1 font-bold mb-6 text-center'>Top Products</h1>
        <div className='grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gao-6 cursor-pointer'>
          {products.products.slice(0, 5).map(((product)=> (
            <ProducteCurd key={product} product={product}/>
          )))}
        </div>
      </div>
    </div>
    <Shop />
    </div>
  );
}

export default Home;
