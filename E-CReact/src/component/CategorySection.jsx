import React from 'react';
import New10 from '../assets/Images/New10.png';
import New13 from '../assets/Images/New13.png';
import New15 from '../assets/Images/New15.png';

const categories = [
  {
    title: "Chicken",
    imageUrl: New10,
  },
  {
    title: "Mutton",
    imageUrl: New13
  },
  {
    title: "Biriyani",
    imageUrl: New15,
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
