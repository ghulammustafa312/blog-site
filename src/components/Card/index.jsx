import { useState } from 'react';

const Card = ({ title, image, hover }) => {
  const [isHovering, setIsHovering] = useState(hover ? true : false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={`relative rounded-lg overflow-hidden transition-colors ${
        isHovering ? 'bg-blue text-white' : 'bg-white text-black'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: 281, height: 300 }}
    >
      <div className='flex flex-col items-center justify-center h-full'>
        <img src={image} alt={title} className='h-1/8 w-1/8 object-cover' />
        <h2 className='text-lg font-black mt-8 text-center'>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
