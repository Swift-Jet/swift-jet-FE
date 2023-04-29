import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';



function Gallery({aircraft_details}) {
  console.log("aircraft_details", aircraft_details);
  const slides = [
    {
      url: "https://media.cntraveler.com/photos/581b8e750ee23d7b457512e9/master/w_3989,h_2655,c_limit/private-jet-tarmac-GettyImages-523476302.jpg",
    },
    {
      url: "https://media.architecturaldigest.com/photos/60c7d09fe7a72cd8dc8e97ad/16:9/w_2560%2Cc_limit/Amanzz.jpeg",
    },
    {
      url: 'https://www.jetflite.fi/uploads/challenger-650-oh-wiw-plane-heroimage-jetflite.jpg',
    },

    {
      url: 'https://www.jetflite.fi/uploads/challenger-650-oh-wiw-plane-heroimage-jetflite.jpg',
    },
    {
      url: 'https://www.jetflite.fi/uploads/challenger-650-oh-wiw-plane-heroimage-jetflite.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[380px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full duration-500 bg-center bg-cover rounded-2xl'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex justify-center py-2 top-4'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;








