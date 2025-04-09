import React from 'react';


const A2 = () => {
  return (<div className='bg-pink-50'>
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-pink-50'>
        <div className='relative'>
      <img src="photo3.jpg" alt="Product Image" className='w-[100%]' />
      <img src="photo4.jpg" alt="Hover Image" className='w-[100%] h-[100%] absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-300'/>
      </div>
    </div>
    </div>
  );
};

export default A2