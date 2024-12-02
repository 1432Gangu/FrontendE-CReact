import React from 'react'
import { useSelector } from 'react-redux'
import ProducteCurd from '../component/ProducteCurd'


const Shop = () => {
  const products = useSelector(state => state.product)
  return (
      <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
        <h1 className='text-2x1 font-bold mb-6 text-center'>Shop</h1>
        <div className='grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gao-6 cursor-pointer'>
          {products.products.map(((product)=> (
            <ProducteCurd key={product} product={product}/>
          )))}
        </div>
      </div>
  )
}

export default Shop
