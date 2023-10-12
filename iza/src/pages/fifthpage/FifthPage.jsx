// FifthPage.js
import React, { useState, useEffect, useRef } from 'react';
import Links from '../../components/links/Links';
import './fifthpage.css'; // Make sure this path is correct
import instagramround from '../../assets/instagramround.svg';
import carouselone from '../../assets/carouselone.png';
import carouseltwo from '../../assets/carouseltwo.png';
import carouselthree from '../../assets/carouselthree.png';
import Navbar from '../../components/navbar/Navbar';
import { motion, useAnimation } from 'framer-motion';

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
}

const FifthPage = () => {
  //carousel
  const carouselmoveRef = useRef(null);
  const iscarouselVisible = useOnScreen(carouselmoveRef);
  const carouselmoveControls = useAnimation();

  //progress bar
  const progressBarRef=useRef(null)
  const isProgressBarVisible=useOnScreen(progressBarRef)
  const progressBarControls=useAnimation()

  useEffect(() => {
    if (iscarouselVisible) {
      carouselmoveControls.start({ x: 0, transition: { duration: 2 } });
    } else {
      // Reset the position when it's not visible
      carouselmoveControls.start({ x: '100%', transition: { duration: 0 } });
    }
     //progress bar
     if(isProgressBarVisible){
      progressBarControls.start({scaleY:40,transition: {duration:.5}});
    }else{
      progressBarControls.start({scaleY:2,transition:{duration:0}})
    }
  }, [iscarouselVisible,carouselmoveControls,isProgressBarVisible,progressBarControls]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  const images = [carouselone, carouseltwo, carouselthree, carouselone, carouseltwo];

  const nextSlide = () => {
    const newIndex = currentIndex + 1;
    if (newIndex < images.length) {
      setCurrentIndex(newIndex);
    }
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const deltaX = x - startX;
    const newIndex = currentIndex - Math.sign(deltaX);

    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='sm:snap-start flex flex-col justify-center items-center bg-[#B0F2B4] sm:h-screen sm:w-[100%] vvsm:h-[900px] gap-2 overflow-hidden'>
      <Navbar />
      <div className='flex w-[90%]  justify-center items-center gap-[3%] '>
        <Links />
        <div className='flex flex-col justify-center items-center  md:w-[95%] h-[650px] gap-2'>
          <img src={instagramround} alt="" className='w-[50px] h-[50px]' />
          {/* second part */}
          <div className='playfair lg:text-[30px] md:text-[25px] sm:text-[18px] '>
            #IZA_APPARELS
          </div>
          <div className='playfair lg:text-[25px] md:text-[25px] sm:text-[18px] '>
            @iza_clothing_apparels_
          </div>
          {/* carousel part */}
          <motion.div
            ref={carouselmoveRef}
            initial={{ x: 0 }}
            animate={carouselmoveControls}
          >
            <div
              className='carousel-container'
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
            >
              <div
                className='carousel'
                style={{ transform: `translateX(-${currentIndex * 404}px)` }}
              >
                {images.map((image, index) => (
                  <img key={index} src={image} alt='' className='carousel-item' />
                ))}
              </div>
            </div>
          </motion.div>
          <div className='carousel-dots'>
            {images.map((_, index) => (
              <span
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? 'active' : ''
                }`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className='bg-[#FFFFFF] h-[50%] w-[4px] flex justify-center items-center vvsm:hidden sm:block mt-[200px]'>
<motion.div className='bg-[#FF9090] w-[100%] h-[10px]'
      ref={ progressBarRef}
      animate={progressBarControls}
      initial={{}}></motion.div>
</div>
      </div>
    </div>
  );
};

export default FifthPage;
