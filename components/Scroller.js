import React, { useEffect, useRef } from 'react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        container.scrollLeft += 2; // Adjust the scroll speed as needed
      }, 20); // Adjust the scroll delay as needed
    };

    const stopScroll = () => {
      clearInterval(scrollInterval);
    };

    container.addEventListener('mouseenter', startScroll);
    container.addEventListener('mouseleave', stopScroll);

    return () => {
      container.removeEventListener('mouseenter', startScroll);
      container.removeEventListener('mouseleave', stopScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ overflowX: 'auto', display: 'flex', height: '300px' }} // Reduced height
      className="bg-black w-full p-2"
    >
      <img src="photo5.png" alt="Image 1" className="p-1 bg-black h-[300px] w-auto" />
      <img src="photo6.png" alt="Image 2" className="p-1 bg-black h-[300px] w-auto" />
      <img src="photo7.png" alt="Image 3" className="p-1 bg-black h-[300px] w-auto" />
      <img src="photo6.png" alt="Image 4" className="p-1 bg-black h-[300px] w-auto" />
      <img src="photo5.png" alt="Image 5" className="p-1 bg-black h-[300px] w-auto" />
      <img src="photo6.png" alt="Image 6" className="p-1 bg-black h-[300px] w-auto" />
      <img src="photo7.png" alt="Image 7" className="p-1 bg-black h-[300px] w-auto" />
      <img src="photo5.png" alt="Image 5" className="p-1 bg-black h-[300px] w-auto" />
      <img src="photo6.png" alt="Image 6" className="p-1 bg-black h-[300px] w-auto" />
      <img src="photo7.png" alt="Image 7" className="p-1 bg-black h-[300px] w-auto" />
    </div>
  );
};

export default Home;
