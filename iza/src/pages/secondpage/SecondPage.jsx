import React, { useState, useEffect, useRef } from 'react';
import Links from '../../components/links/Links';
import secondpageimg from '../../assets/secondpageimg.png';
import secondpageimg2 from '../../assets/secondpageimg2.jpeg';
import secondpageimg3 from '../../assets/secondpageimg3.jpeg';
import secondpageimg4 from '../../assets/secondpageimg4.jpeg';
import secondpageimg5 from '../../assets/secondpageimg5.jpeg';
import Button from '../../components/button/Button';
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

const SecondPage = () => {
  const [state, setState] = useState(secondpageimg5);
  const headTextRef = useRef(null);
  const isHeadTextVisible = useOnScreen(headTextRef);
  const controls = useAnimation();
  // product details head
  const productDetailsRef = useRef(null);
  const isProductDetailsVisible = useOnScreen(productDetailsRef); 
  const productDetailsControls = useAnimation();
  // product details head
  const productDeatailsparaRef=useRef(null)
  const isproductDeatailspara=useOnScreen(productDeatailsparaRef)
  const productDeatailsparaControls=useAnimation()
  //product details button  
  const productDeatailsbuttonRef=useRef(null)
  const isproductDeatailsbutton=useOnScreen(productDeatailsbuttonRef)
  const productDeatailsbuttonControls=useAnimation()
  //progress bar
  const progressBarRef=useRef(null)
  const isProgressBarVisible=useOnScreen(progressBarRef)
  const progressBarControls=useAnimation()

  useEffect(() => {
    if (isHeadTextVisible) {
      // Animate the element when it becomes visible
      controls.start({ x: 0, transition: { duration: 2 } });
    } else {
      // Reset the scale when it's not visible
      controls.start({ x: '-100%', transition: { duration: 0 } });
    }

    if (isProductDetailsVisible) {
      // Animate the "Product Details" section from right to left
      productDetailsControls.start({ x: 0, transition: { duration: 1 } });
    } else {
      // Move it off-screen to the right when not visible
      productDetailsControls.start({ x: '100%', transition: { duration: 0 } });
    }
    // product details head

    if (isproductDeatailspara) {
      // Animate the "Product Details" section from right to left
      productDeatailsparaControls.start({ x: 0, transition: { duration: 2 } });
    } else {
      // Move it off-screen to the right when not visible
      productDeatailsparaControls.start({ x: '100%', transition: { duration: 0 } });
    }

    //product details button
    if (isproductDeatailsbutton) {
      // Animate the "Product Details" section from right to left
      productDeatailsbuttonControls.start({ x: 0, transition: { duration:0.5   } });
    } else {
      // Move it off-screen to the right when not visible
      productDeatailsbuttonControls.start({ x: '100%', transition: { duration: 0 } });
    }

    //progress bar
    if(isProgressBarVisible){
      progressBarControls.start({scaleY:14,transition: {duration:.5}});
    }else{
      progressBarControls.start({scaleY:2,transition:{duration:0}})
    }


  }, [isHeadTextVisible, controls, isProductDetailsVisible, productDetailsControls,isproductDeatailspara,productDeatailsparaControls,isproductDeatailsbutton,productDeatailsbuttonControls,isProgressBarVisible, progressBarControls]);

  const images = [
    {
      image: secondpageimg,
    },
    {
      image: secondpageimg2,
    },
    {
      image: secondpageimg3,
    },
    {
      image: secondpageimg4,
    },
  ];

  return (
    <div className='sm:snap-start flex flex-col justify-center items-center bg-[#B0F2B4] sm:h-screen sm:w-[100%] vvsm:h-[900px] gap-2'>
      <Navbar />
      <div className='flex w-[95%] justify-center items-center gap-[6%]'>
        <Links />
        <div className='flex flex-col justify-center items-center bg-red-10 lg:w-[80%] md:w-[90%] sm:w-[90%] sm:h-[100%] vvsm:w-[100%] gap-7 overflow-hidden'>
          {/* Head part */}
          <motion.div
            className='vvsm:hidden sm:block playfair lg:text-[30px] md:text-[28px] sm:text-[25px]'
            ref={headTextRef}
            animate={controls}
            initial={{ x: 0 }} // Initial scale when not in viewport
          >
            Spring/Summer 2023 Collection: Bright and Bold
          </motion.div>
          {/* vvsm head */}
          <div className='sm:hidden flex flex-col w-[100%] justify-center items-center '>
            <div className='playfair text-[20px]'>Check out </div>
            <div className='playfair text-[20px]'>the seasonal collection</div>
          </div>
          {/* carosel part */}
          <div className='flex sm:flex-row vvsm:flex-col justify-center items-center w-[95%] lg:gap-[70px] md:gap-10 sm:gap-[30px] '>
            {/* Image */}
            <div className='flex sm:flex-row vvsm:flex-col justify-center items-center lg:gap-10 sm:gap-5 '>
              <div className='flex justify-center sm:h-[500px] sm:w-[100%]'>
                <img
                  className='sm:h-[500px] sm:w-[100%] vvsm:h-[350px] rounded-lg '
                  src={state}
                  alt=''
                />
              </div>
              <div className='flex sm:flex-col vvsm:flex-row gap-2 sm:mt-0 vvsm:mt-[10px]'>
                {images.map((element) => (
                  <img
                    className='sm:w-[100px] sm:h-[118px] vvsm:h-[80px] vvsm:w-[70px] rounded '
                    src={element.image}
                    alt=''
                    onClick={() => {
                      setState(element.image);
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Product Details */}
            <div
              className='sm:h-[95%] flex flex-col sm:justify-start vvsm:justify-center sm:items-start vvsm:items-center vvsm:mt-[20px]'
            >
              <div>
                <motion.div className='playfair md:text-[30px] sm:text-[25px] vvsm:text-[20px] '
                ref={productDetailsRef}
                animate={productDetailsControls}
                initial={{ x: '100%' }}>
                  Firdaus Spring Collection
                </motion.div>
                <motion.div  
                ref={ productDeatailsparaRef}
                animate={productDeatailsparaControls}
                initial={{ x: '100%' }} >
                <div className='josefinSans md:text-[18px] sm:text-[16px] vvsm:text-[14px] mt-[10px] '>
                  When it comes to finding a dress to wear on a
                </div>
                <div className='josefinSans md:text-[18px] sm:text-[16px] vvsm:text-[14px] '>
                  party out, the options are endless. Certain outfits
                </div>
                <div className='josefinSans md:text-[18px] sm:text-[16px] vvsm:text-[14px] '>
                  flatter certain body types, weather, and occasions,
                </div>
                <div className='josefinSans md:text-[18px] sm:text-[16px] vvsm:text-[14px] '>
                  so it can be overwhelming.
                </div>
                </motion.div>
              </div>
              <motion.div className='lg:mt-[60px] sm:mt-[50px] vvsm:mt-[30px] '
              ref={ productDeatailsbuttonRef}
              animate={productDeatailsbuttonControls}
              initial={{ x: '100%' }} >
                <Button title='COLLECTION' />
              </motion.div>
            </div>
          </div>
        </div>
      {/* progress bar */}

      <div className='bg-[#FFFFFF] h-[60%] w-[2px] flex justify-center items-center vvsm:hidden sm:block'>
      <motion.div className='bg-[#FF9090] w-[100%] h-[10px]'
      ref={ progressBarRef}
      animate={progressBarControls}
      initial={{}}></motion.div>
</div>
      </div>
    </div>
  );
};

export default SecondPage;
