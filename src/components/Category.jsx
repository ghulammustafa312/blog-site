import React from 'react';
import html from '../assets/html.png';
import js from '../assets/js.png';
import tailwindcss from '../assets/tailwindcss.png';
import vue from '../assets/vue.png';
import react from '../assets/react.png';
import Card from './Card';

const categoriesList = [
  {
    name: 'HTML',

    image: html,
  },
  {
    name: 'JS',

    image: js,
  },
  {
    name: 'Tailwind',

    image: tailwindcss,
  },
  {
    name: 'Vue',

    image: vue,
  },
  {
    name: 'React',

    image: react,
  },
];

const Category = () => {
  return (
    <div className='bg-lg1'>
      <div className='flex justify-between items-center px-20 py-4 '>
        <h1 className='text-xl font-bold'>Browse The Category</h1>

        <a href='/' className='text-lg font-bold'>
          See All Category &gt;
        </a>
      </div>

      <div className='flex flex-wrap justify-center gap-6 py-8 px-20'>
        {categoriesList.map((category, index) => (
          <Card key={index} title={category.name} image={category.image} />
        ))}
      </div>
    </div>
  );
};

export default Category;
