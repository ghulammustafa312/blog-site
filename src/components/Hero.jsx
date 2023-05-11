import React from 'react';
import hero from '../assets/hero.png';
import arrowDown from '../assets/scrolldown.png';
import Button from './Button';

const Hero = () => {
  return (
    <div className='bg-lg1'>
      <div className='flex flex-col md:flex-row items-center justify-between  px-4 md:px-20 py-1'>
        <div className='md:w-1/2 text-center md:text-left'>
          <h1 className='text-5xl font-bold text-black'>
            Hi, I'm Dasteen <br className='hidden md:inline' /> Front End Dev
          </h1>

          <p className='border-l-2 pl-2 mt-4 text-dg text-xl'>
            On this blog I share tips and tricks, frameworks, projects,
            tutorials, etc. Make sure you subscribe to get the latest updates.
          </p>

          <div className='mt-8 flex'>
            <input
              type='text'
              placeholder='Enter your email here....'
              className='bg-white  px-4 py-2 rounded-lg placeholder-font-bold focus:outline-none flex-grow md:w-auto'
            />

            <Button text={'Subscribe'} />
          </div>
        </div>

        <div className='md:w-1/2 md:ml-8 flex justify-center mt-12 md:mt-0'>
          <img
            src={hero}
            alt='hero'
            className='w-72 h-72 md:w-auto md:h-auto'
          />
        </div>
      </div>

      <div className='flex items-center justify-center mt-20'>
        <img src={arrowDown} alt='arrow down' className='w-6 h-6' />
      </div>
    </div>
  );
};

export default Hero;
