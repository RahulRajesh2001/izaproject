import React from 'react';
import very_small_device from "../../../assets/pagefourbg_vsm.png"
import ssm_img from '../../../assets/pagefourbg_ssm.png'
import sm_img from '../../../assets/pagefourbg_sm.png'
import md_img from '../../../assets/pagefourbg_md.png'
import Landingpageone from '../../../assets/pagefourbg_xl.png'
import lg_img from '../../../assets/pagefourbg_lg.png'
import './styles.css'; //


const Page4 = ({ isVisible }) => {

  return (
    <div >
      {/* vlg device */}
      <img src={Landingpageone} alt="" className='absolute w-[100%] h-screen  vvsm:hidden xxl:block ' />
      {/* large device */}
      <img src={lg_img} alt=""  className='absolute w-[100%] h-screen  vvsm:hidden lg:block xxl:hidden '/>
      {/* medium device */}
      <img src={md_img} alt="" className='absolute w-[100%] h-screen  vvsm:hidden md:block lg:hidden' />
      {/* small device */}
      <img src={sm_img} alt="" className='absolute w-[100%] h-screen  vvsm:hidden sm:block md:hidden' />
      {/* small small device */}
      <img src={ssm_img} alt="" className='absolute w-[100%] h-screen  vvsm:hidden ssm:block sm:hidden' />
      {/* vsm */}
      <img src={very_small_device} alt="" className='absolute w-[100%] h-screen ssm:hidden' />



      <div className={`absolute h-screen w-[20%] left-[0] border-r-2 ${isVisible ? 'disappearing-div' : 'disappearing-div exit'}`} ></div>
       <div className= {`absolute h-screen w-[20%] left-[20%] border-r-2 ${isVisible ? 'disappearing-div' : 'disappearing-div exit'}`} ></div>
       <div className= {`absolute h-screen w-[20%] left-[40%] border-r-2 ${isVisible ? 'disappearing-div' : 'disappearing-div exit'}`} ></div>
       <div className={`absolute h-screen w-[20%] left-[60%] border-r-2 ${isVisible ? 'disappearing-div' : 'disappearing-div exit'}`} ></div>
       <div className={`absolute h-screen w-[20%] left-[80%] ${isVisible ? 'disappearing-div' : 'disappearing-div exit'}`} ></div>

       <div className=' justify-center items-center w-[400px] h-[50px] absolute rotate-90 text-[#ffff] lg:top-[200px]  lg:left-[100px] 
                                                                                                          md:top-[250px]  md:left-[-20px]  
                                                                                                           sm:top-[200px] sm:left-[-50px] 
                                                                                                           vvsm:top-[200px] vvsm:left-[-150px] 
                                                                                                           vsm:top-[250px] vsm:left-[-130px]
                                                                                                          ssm:left-[-130px] sm:text-[70px] vsm:text-[50px] vvsm:text-[40px] playfair'>ELISE X GAL</div>

    </div>
  )
}

export default Page4