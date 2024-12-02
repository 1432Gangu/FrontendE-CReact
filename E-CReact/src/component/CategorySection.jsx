import React from 'react';
import Image1 from '../assets/Images/Image1.png';
import Image2 from '../assets/Images/Image2.png';
import Image3 from '../assets/Images/Image3.jpg';

const categories = [
  {
    title: "Chicken",
    imageUrl: Image1,
  },
  {
    title: "Mutton",
    imageUrl: Image2
  },
  {
    title: "Fish",
    imageUrl: Image3,
  },
];

const CategorySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div key={index} className="relative group cursor-pointer overflow-hidden">
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl font-semibold">{category.title}</p>
            <p className="text-sm mt-2">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
