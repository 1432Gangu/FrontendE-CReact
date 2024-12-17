import React from 'react';
import { useSelector } from 'react-redux';
// import ProductCard from '../component/ProductCard';

import ProductCard from '../component/ProducteCurd';

const Shop = () => {
  const products = useSelector((state) => state.product);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h1 className="text-2xl font-bold mb-6 text-center">ITEMS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;