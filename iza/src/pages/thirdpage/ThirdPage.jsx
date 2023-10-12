import React, { useState, useEffect, useRef } from 'react';
import './thirdpage.css'
import Links from '../../components/links/Links'
import Button from "../../components/button/Button"
import thirdpageimg1 from '../../assets/thirdpageimg1.png'
import Navbar from "../../components/navbar/Navbar";
import izalogo from "../../assets/izalogo.svg";
import thirdpageimg2 from '../../assets/thirdpageimg2.png'
import thirdpageimg3 from '../../assets/thirdpageimg3.png'
import thirdpageimg4 from '../../assets/thirdpageimg4.png'
import thirdpageimg5 from '../../assets/thirdpageimg5.png'
import thirdpageimg6 from '../../assets/thirdpageimg6.png'
import thirdpageimg7 from '../../assets/thirdpageimg7.png'
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



const ThirdPage = () => {
  //image part
  const imagecollectionRef = useRef(null);
  const isimagecollectionVisible = useOnScreen(imagecollectionRef );
  const isimagecollectionControls = useAnimation();
  //iza logo
  const izalogoRef=useRef(null);
  const isizalogoVisible=useOnScreen(izalogoRef);
  const isizalogoControls=useAnimation()
  //thirdpagehead
  const thirdpageheadRef=useRef(null);
  const isthirdpagehead=useOnScreen(thirdpageheadRef);
  const thirdpageheadControls=useAnimation()
  //thirdpagepara
  const thirdpageparaRef=useRef(null);
  const isthirdpagepara=useOnScreen(thirdpageparaRef);
  const thirdpageparaControls=useAnimation()
  //thirdmainpagehead
  const thirdmainpageRef=useRef(null);
  const isthirdmainpage=useOnScreen(thirdmainpageRef);
  const thirdmainpageControls=useAnimation()
   //progress bar
   const progressBarRef=useRef(null)
   const isProgressBarVisible=useOnScreen(progressBarRef)
   const progressBarControls=useAnimation()


  useEffect(()=>{
    //image part
    if(isimagecollectionVisible){
      isimagecollectionControls .start({x:0,transition:{duration:2}})
    }else{
      isimagecollectionControls.start({x:'-100%',transition:{duration:0}})
    }
    //iza logo
    if(isizalogoVisible){
      isizalogoControls.start({x:0,transition:{duration:1}})
    }else{
      isizalogoControls.start({x:'100%',transition:{duration:0}})
    }
    //thirdpagehead
    if(isthirdpagehead){
      thirdpageheadControls.start({x:0,transition:{duration:2}})
    }else{
      thirdpageheadControls.start({x:'100%',transition:{duration:0}})
    }
    //thirdpagepara
    if(isthirdpagepara){
      thirdpageparaControls.start({x:0,transition:{duration:3}})
    }else{
      thirdpageparaControls.start({x:'100%',transition:{duration:0}})
    }
      //thirdmainpagehead
      if(isthirdmainpage){
        thirdmainpageControls.start({y:0,transition:{duration:1}})
      }else{
        thirdmainpageControls.start({y:'300%',transition:{duration:0}})
      }
       //progress bar
       if(isProgressBarVisible){
        progressBarControls.start({scaleY:21,transition: {duration:.5}});
      }else{
        progressBarControls.start({scaleY:2,transition:{duration:0}})
      }


  },[isProgressBarVisible, progressBarControls,isimagecollectionVisible,isimagecollectionControls,isizalogoVisible, isizalogoControls,thirdpageheadControls,isthirdpagehead,isthirdpagepara,thirdpageparaControls,isthirdmainpage,thirdmainpageControls])

  return (
    <div className='sm:snap-start  flex flex-col justify-center items-center  bg-[#B0F2B4] sm:h-screen sm:w-[100%] vvsm:h-[900px] gap-2'>
    <Navbar />
    <div className='bg-red-10 flex w-[91%] justify-center items-center gap-[6%] overflow-hidden '>
    <Links />
      <div className=' flex flex-col  justify-center items-center  bg-red-10 lg:w-[90%] md:w-[85%] sm:w-[85%] sm:h-[100%] vvsm:w-[100%]  gap-7  '>
        
        {/* Head part */}
        <motion.div className='playfair lg:text-[30px] md:text-[25px] sm:text-[18px]'
        ref={thirdmainpageRef}
        animate={thirdmainpageControls}
        initial={{ x: 0 }}>
        GET YOUR CUSTOM MADE OUTFIT NOW
        </motion.div>
        <div className='flex sm:flex-row vvsm:flex-col  w-[100%]  lg:gap-[80px] md:gap-[50px] sm:gap-[20px]'>
          {/* infinite slide */}
          <motion.div className='lg:w-[400px] sm:w-[400px] sm:h-[500px] vvsm:w-[100%] vvsm:h-[300px]  flex justify-around'
           ref={imagecollectionRef}
           animate={isimagecollectionControls }
           initial={{ x: 0 }}>
            {/* first slide */}
            <div className='parent  sm:h-[500px] vvsm:h-[300px]'>
              <div className='child flex flex-col gap-9'>
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                            sm:h-[150px] sm:w-[100px]
                            vvsm:h-[100px] vvsm:w-[90px]'
                />
                <img
                  src={thirdpageimg2}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
                <img
                  src={thirdpageimg3}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
            
              </div>
              <div className='child flex flex-col gap-7'>
                <img
                  src={thirdpageimg4}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
                <img
                  src={thirdpageimg5}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
                <img
                  src={thirdpageimg6}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
             
              </div>
            </div>
            <div className='another  sm:h-[500px] vvsm:h-[300px]'>
              <div className='anotherchild flex flex-col gap-9'>
                <img
                  src={thirdpageimg7}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
                <img
                  src={thirdpageimg2}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
                <img
                  src={thirdpageimg3}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
              </div>
              <div className='anotherchild flex flex-col gap-7'>
                <img
                  src={thirdpageimg4}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
                <img
                  src={thirdpageimg5}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
                <img
                  src={thirdpageimg6}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
              </div>
            </div>
            <div className='parent  sm:h-[500px] vvsm:h-[300px]'>
              <div className='child flex flex-col gap-9'>
                <img
                  src={thirdpageimg7}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
                <img
                  src={thirdpageimg2}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
              </div>
              <div className='child flex flex-col gap-7'>
                <img
                  src={thirdpageimg3}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
                <img
                  src={thirdpageimg4}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />
                <img
                  src={thirdpageimg5}
                  alt=''
                  className='md:h-[200px] md:w-[120px]
                              sm:h-[150px] sm:w-[100px]
                              vvsm:h-[100px] vvsm:w-[90px]'
                />

              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <div className=' sm:w-[50%] vvsm:w-[100%] flex flex-col sm:items-start vvsm:items-center sm:justify-start vvsm:justify-center'>
            <motion.div className='w-[100%] h-[100px] flex justify-center items-center'
            ref={izalogoRef}
            animate={isizalogoControls }
            initial={{ x: 0 }}>
              <img src={izalogo} alt="" />
            </motion.div>
            <div>
              <motion.div
              ref={thirdpageheadRef}
              animate={thirdpageheadControls}
              initial={{ x: 0 }}>
              <div className='playfair  lg:text-[20px] sm:text-[18px] '>
              This is where Technology meets
              </div>
              <div className='playfair  lg:text-[20px] sm:text-[18px]'>
             Craftsmanship
              </div>
              </motion.div>
              <motion.div className='josefinSans text-[16px] mt-[20px]'
              ref={thirdpageparaRef}
              animate={thirdpageparaControls}
              initial={{ x: 0 }}>
                When it comes to finding a dress to wear on a party out, the
                options are endless. Certain outfits flatter certain body types,
                weather, and occasions, so it can be overwhelming.{' '}
              </motion.div>
            </div>
            <div className='mt-[50px]'>
              <Button title="VISIT PAGE"/>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#FFFFFF] h-[60%] w-[3px] flex justify-center items-center vvsm:hidden sm:block overflow-hidden'>
<motion.div className='bg-[#FF9090] w-[100%] h-[10px]'
      ref={ progressBarRef}
      animate={progressBarControls}
      initial={{}}></motion.div>
</div>
    </div>
    </div>
  )
}

export default ThirdPage
