import React from 'react';

const Button = ({ text, icon }) => {
  return (
    <button className='bg-blue text-white mx-2 py-2 px-4 font-bold rounded-lg flex items-center'>
      {icon && (
        <img
          src={icon}
          alt='button icon'
          className='mr-2 w-4 h-4 object-contain'
        />
      )}

      {text}
    </button>
  );
};

export default Button;
