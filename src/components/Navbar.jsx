import React, { useState } from 'react';
import Button from './Button';
import cofee from '../assets/cofee.png';
import search from '../assets/search.png';
import close from '../assets/close.svg';
import menu from '../assets/menu.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='bg-lg1 p-2 flex justify-between px-6'>
      <div className='flex items-center'>
        <a href='/' className='text-[#001858] text-2xl font-bold'>
          Dasteen.<span className='text-xs'>Blog</span>
        </a>
      </div>

      {/* <div className="sm:hidden flex items-center">

        <a href="/" className="ml-8 text-black font-bold hover:text-blue">

          Home

        </a>

        <a href="/" className="ml-8 text-black font-bold hover:text-blue">

          Category

        </a>

        <a href="/" className="ml-8 text-black font-bold hover:text-blue">

          About Me

        </a>

        <div className="relative ml-8">

          <input

            type="text"

            placeholder="Search"

            className="bg-lg1 text-black pl-6 pr-2 py-1 font-bold placeholder-font-bold focus:outline-none w-1/2"

          />

          <img

            src={search}

            alt="Search"

            className="absolute inset-y-0 left-0 pl-2 pt-2"

          />

        </div>


        <Button text="Buy Me A Coffee" icon={cofee} />

      </div> */}

      <ul className='list-none hidden md:flex items-center'>
        <li className='font-medium cursor-pointer'>
          <a href='/' className='ml-8 text-black font-bold hover:text-blue'>
            Home
          </a>
        </li>

        <li className='font-medium cursor-pointer'>
          <a href='/' className='ml-8 text-black font-bold hover:text-blue'>
            Category
          </a>
        </li>

        <li className='font-medium cursor-pointer'>
          <a href='/' className='ml-8 text-black font-bold hover:text-blue'>
            About Me
          </a>
        </li>

        <li className='font-medium cursor-pointer'>
          <div className='relative ml-8'>
            <input
              type='text'
              placeholder='Search'
              className='bg-lg1 text-black pl-6 pr-2 py-1 font-bold placeholder-font-bold focus:outline-none w-1/2'
            />

            <img
              src={search}
              alt='Search'
              className='absolute inset-y-0 left-0 pl-2 pt-2'
            />
          </div>
        </li>

        <li className='font-medium cursor-pointer'>
          <Button text='Buy Me A Coffee' icon={cofee} />
        </li>
      </ul>

      <div className='md:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer bg-blue'
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            <li className='font-medium cursor-pointer'>
              <a href='/' className='ml-8 text-black font-bold hover:text-blue'>
                Home
              </a>
            </li>

            <li className='font-medium cursor-pointer'>
              <a href='/' className='ml-8 text-black font-bold hover:text-blue'>
                Category
              </a>
            </li>

            <li className='font-medium cursor-pointer'>
              <a href='/' className='ml-8 text-black font-bold hover:text-blue'>
                About Me
              </a>
            </li>

            <li className='font-medium cursor-pointer'>
              <div className='relative ml-8'>
                <input
                  type='text'
                  placeholder='Search'
                  className='bg-lg1 text-black pl-6 pr-2 py-1 font-bold placeholder-font-bold focus:outline-none w-1/2'
                />

                <img
                  src={search}
                  alt='Search'
                  className='absolute inset-y-0 left-0 pl-2 pt-2'
                />
              </div>
            </li>

            <li className='font-medium cursor-pointer'>
              <Button text='Buy Me A Coffee' icon={cofee} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
