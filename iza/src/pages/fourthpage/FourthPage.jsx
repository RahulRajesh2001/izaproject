import React, { useState, useEffect, useRef } from 'react';
import Links from '../../components/links/Links'
import Cashback from '../../assets/Cashback.svg'
import imagethree from '../../assets/imagethree.png'
import imagetwo from '../../assets/imagetwo.png'
import Navbar from "../../components/navbar/Navbar"
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

const FourtPage = () => {


  //image scale
  const firstimagescaleRef = useRef(null);
  const isfirstimageVisible = useOnScreen(firstimagescaleRef );
  const firstimagescaleControls = useAnimation();
   //progress bar
   const progressBarRef=useRef(null)
   const isProgressBarVisible=useOnScreen(progressBarRef)
   const progressBarControls=useAnimation()


useEffect(()=>{
  if(isfirstimageVisible){
    firstimagescaleControls.start({ scaleY: 1, transition: { duration: .5 } });
  } else {
    // Reset the scale when it's not visible
    firstimagescaleControls.start({ scaleY: 0.5,transition: { duration: 0 } });
  }
   //progress bar
   if(isProgressBarVisible){
    progressBarControls.start({scaleY:28,transition: {duration:.5}});
  }else{
    progressBarControls.start({scaleY:2,transition:{duration:0}})
  }

},[isProgressBarVisible, progressBarControls,isfirstimageVisible,firstimagescaleControls])


  return (
    <div className='sm:snap-start flex flex-col justify-center items-center  bg-[#B0F2B4] sm:h-screen sm:w-[100%] vvsm:h-[900px] gap-2'>
    <Navbar />
    <div className='bg-red-10 flex w-[95%] justify-center items-center gap-[6%] overflow-hidden'>
    <Links />
      <div className=' flex flex-col  sm:justify-center sm:items-start    md:w-[80%] md:h-[90%]   md:gap-5 sm:gap-4 vvsm:gap-3'>
        <div>
          <img src={Cashback} alt='' className=' ' />
        </div>

        {/* secondpart */}
        <div className='playfair w-[100%]  flex  sm:justify-start vvsm:justify-center lg:text-[30px] md:text-[28px] sm:text-[18px] '>
          check out the latest wear collections
        </div>
        {/* thirdpart */}
        <motion.div className='flex sm:flex-row vvsm:flex-col vvsm:items-center w-[100%]  gap-2'
                   ref={firstimagescaleRef}
                   initial={{ scaleY: 0.5 }}
                   animate={firstimagescaleControls}>        
            <img className='sm:w-[70%] sm:h-[400px] vvsm:w-[80%] vvsm:h-[300px] ' src={imagethree} alt='' />
            <img className='sm:w-[30%] sm:h-[400px] vvsm:w-[80%] vvsm:h-[300px] rounded-lg' src={imagetwo} alt='' />
        </motion.div>
      </div>
      <div className='bg-[#FFFFFF] h-[70%] w-[4px] flex justify-center items-center vvsm:hidden sm:block'>
<motion.div className='bg-[#FF9090] w-[100%] h-[10px]'
      ref={ progressBarRef}
      animate={progressBarControls}
      initial={{}}></motion.div>
</div>
    </div>
    </div>
  )
}
export default FourtPage
