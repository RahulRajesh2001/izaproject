import React from 'react';
import Star from '../../assets/Star.svg'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Links from '../../components/links/Links'
import Navbar from '../../components/navbar/Navbar'
import { motion, useAnimation } from 'framer-motion';
import slideone from '../../assets/slideone.png';
import slidetwo from '../../assets/slidetwo.png';
import slidethree from '../../assets/slidethree.png'


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


const FirstPage = () => {
    //progress bar
    const progressBarRef=useRef(null)
    const isProgressBarVisible=useOnScreen(progressBarRef)
    const progressBarControls=useAnimation()

    useEffect(() => {
  
    //progress bar
    if(isProgressBarVisible){
      progressBarControls.start({scaleY:6,transition: {duration:.5}});
    }else{
      progressBarControls.start({scaleY:2,transition:{duration:0}})
    }
  
  
    }, [isProgressBarVisible, progressBarControls]);
  

  let images = [
    {
      img: img3,
    },
    {
      img: img3,
    },
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ]

  const [activeItem, setActiveItem] = useState(1)
  const wrapperRef = useRef()
  const timeoutRef = useRef()

  useEffect(() => {
    if (!wrapperRef.current) return
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    wrapperRef.current.style.setProperty(
      '--transition',
      '600ms cubic-bezier(0.22, 0.61, 0.36, 1)'
    )

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty('--transition')
    }, 900)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [activeItem])

  return (
    
    
    <div className=' sm:snap-start   flex flex-col justify-center items-center  bg-[#B0F2B4] sm:h-screen sm:w-[100%] vvsm:h-[900px] gap-2'>
      <Navbar />
    <div className='  flex justify-center items-center bg-[#B0F2B4] h-screen w-[95%] sm:gap-[3%]  '>
      <Links />
      <div className='  flex flex-col  justify-center items-center    sm:w-[85%] vvsm:w-[100%]   lg:gap-8 md:gap-5 sm:gap-4 vvsm:gap-3 '>
        <div className='w-[100%] flex justify-between items-center'>
          {/* first section */}
          <div className='josefinSans lg:text-[20px] md:text-[16px] sm:text-[14px] text-[#000000] vvsm:text-[15px] '>
            FREE DELEVERY
          </div>
          <img
            src={Star}
            alt=''
            className='lg:w-[20px] lg:h-[20px] sm:h-[15px] sm:w-[15px] vvsm:h-[15px] vvsm:w-[15px]'
          />
          <div className='josefinSans lg:text-[20px] md:text-[16px] sm:text-[14px] text-[#000000] vvsm:text-[15px] '>
            CASHBACK POINTS
          </div>
          <img
            src={Star}
            alt=''
            className='lg:w-[20px] lg:h-[20px] sm:h-[15px] sm:w-[15px] vvsm:h-[15px] vvsm:w-[15px]'
          />
          <div className=' vvsm:hidden sm:block josefinSans lg:text-[20px] md:text-[16px] sm:text-[14px] text-[#000000] '>
            FREE CANCELLATION
          </div>
          <img
            src={Star}
            alt=''
            className=' vvsm:hidden sm:block lg:w-[20px] lg:h-[20px] sm:h-[15px] sm:w-[15px]'
          />
          <div className='vvsm:hidden sm:block josefinSans lg:text-[20px] md:text-[16px] sm:text-[14px] text-[#000000] '>
            24/7 SUPPORT
          </div>
          <img
            src={Star}
            alt=''
            className='vvsm:hidden sm:block lg:w-[20px] lg:h-[20px] sm:h-[15px] sm:w-[15px]'
          />
        </div>

        {/* secondpart */}
        <div className='playfair font-[serif] lg:text-[30px] md:text-[20px] sm:text-[18px] '>
          {' '}
          check out the latest wear collections
        </div>
        {/* carosel part */}
    
        <div className=' vvsm:hidden sm:block flex   w-[110%]  '>
          <ul
            ref={wrapperRef}
            className=' group flex  flex-col  sm:h-[350px]  w-[100%] sm:flex-row gap-[6px]'
          >
            {images.map((element, index) => (
              <li
                onClick={() => setActiveItem(index)}
                aria-current={activeItem === index}
                className={classNames(
                  "relative cursor-pointer sm:w-[30%] sm:first:w-[10%] sm:last:w-[10%] sm:[&[aria-current='true']]:w-[100%] ",
                  'sm:[transition:width_var(--transition,200ms_ease-in)]',
                  'sm:before-block before:absolute before:bottom-0  before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white',
                  'sm:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%] sm:hover:w-[25%]',
                  'first:pointer-events-none last:pointer-events-none sm:[&_img]:first:opacity-0 sm:[&_img]:last:opacity-0'
                )}
                key={element.index}
              >
                <div className='relative h-full w-full  overflow-hidden rounded-2xl '>
                  <img
                    className='absolute  right-0 top-1/2  max-w-none bg-cover  -translate-y-1/2   left-1/2 w-[750px] -translate-x-1/2 '
                    src={element.img}
                  />
                  <div
                    className={classNames(
                      'inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture sm:absolute sm:transition-opacity',
                      activeItem === index ? 'sm:opacity-25' : 'sm:opacity-0'
                    )}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* vvsm:carousel part */}
     

        <div className='flex flex-col justify-center items-center w-[100%] h-[550px] sm:hidden gap-2'>
<img src={slideone} alt="" />
<img src={slidetwo} alt="" />
<img src={slidethree} alt="" />
</div>

        {/* carosel bottome part */}

        <div className='flex gap-2'>
          <div className='bg-[#2D2D2D] w-[30px] h-[10px] rounded-full'></div>
          <div className='bg-[#2D2D2D] w-[30px] h-[10px] rounded-full'></div>
          <div className='bg-[#2D2D2D] w-[30px] h-[10px] rounded-full'></div>
        </div>
      </div>
      <div className=' h-[50%] w-[2px] bg-[#ffff] flex justify-center items-center  vvsm:hidden sm:block overflow-hidden'>
          <motion.div className='bg-[#FF9090] w-[100%] h-[10px]'
      ref={ progressBarRef}
      animate={progressBarControls}
      initial={{}}></motion.div>
</div>
    </div>
    </div>
  )
}
export default FirstPage
