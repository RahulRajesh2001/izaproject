import React from 'react'
import footer from '../../assets/footer.png'
import word from '../../assets/word.png'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import map from '../../assets/map.svg'
import izalogo from '../../assets/izalogo.svg'

const SixthPage = () => {
  return (
    <div className='sm:snap-start flex flex-col  bg-[#B0F2B4] sm:h-screen vvsm:h-[900px] sm:w-[100%]  '>
      {/* location part */}
      <div className='relative overflow-hidden  '>
        <img src={footer} alt='' className='sm:h-[500px] vvsm:h-[600px] object-cover'/>
        <img
          src={word}
          alt=''
          className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />
        {/* footer text */}
       <div className=' absolute z-20 bottom-0 w-[100%]'>
       <div className='flex flex-col justify-center items-center    w-[100%] sm:h-[500px] vvsm:h-[550px]'>
          <div className=' flex gap-[5px] vvsm:flex-col sm:flex-row sm:justify-evenly  w-[100%] h-[300px] items-center '>
            {/* left section */}
            <div className='flex vvsm:flex-row sm:flex-col vvsm:w-[100%] sm:w-[50%]  vvsm:justify-around '>
              <div>
              <div className='josefinSans font-bold sm:text-[25px] vvsm:text-[20px] text-[#ffff]'>
                LOCATION
              </div>
              <div className='josefinSans sm:text-[20px] vvsm:text-[16px]  text-[#ffff] mt-[10px]'>
                Lorem ipsum dolor sit amet.
              </div>
              <div className='josefinSans sm:text-[20px] vvsm:text-[16px]  text-[#ffff]'>
                consectetur adipiscing elit
              </div>
              <div className='josefinSans sm:text-[20px] vvsm:text-[16px]  text-[#ffff]'>
                dolor - 684521
              </div>
              <div className='josefinSans sm:text-[20px] vvsm:text-[16px]  text-[#ffff]'>
                dolor - 684521
              </div>
              </div>

              <div className='flex  justify-between items-center w-[150px] mt-[20px]'>
                <a href='#'> 
                  <AiOutlineInstagram size={25} className='text-[#ffff]'/>
                </a>
                <a href='#'>
                  <BiLogoFacebook size={25} className='text-[#ffff]' />
                </a>
                <a href='#'>
                  <AiOutlineTwitter size={25} className='text-[#ffff]'/>
                </a>
              </div>
            </div>
             {/* right section */}
            <div className=' flex justify-center items-center'>
              <img src={map} alt='' className='sm:w-[300px] sm:h-[300px] vvsm:w-[90%] h-[200px]' />
            </div>
          </div>
         
          {/* section two */}
          <div className=' flex sm:flex-row vvsm:flex-col justify-evenly items-center w-[100%] h-[50px] vsm:mt-[50px] vvsm:mt-[70px] sm:mt-0'>
            <a href='#' className='josefinSans text-[#ffff] md:text-[22px] sm:text-[18px] vvsm:hidden sm:block'>
              Home
            </a>
            <div className='bg-gray-300 w-[1px] h-[20px] vvsm:hidden sm:block'></div>
            <a href='#' className='josefinSans text-[#ffff] md:text-[22px] sm:text-[18px] vvsm:hidden sm:block'>
              Collection
            </a>
            <div className='bg-gray-300 w-[1px] h-[20px] vvsm:hidden sm:block'></div>
            <a href='#' className='josefinSans text-[#ffff] md:text-[22px] sm:text-[18px] vvsm:hidden sm:block'>
              Shop
            </a>
            <div className='bg-gray-300 w-[1px] h-[20px] vvsm:hidden sm:block'></div>
            <a href='#' className='josefinSans text-[#ffff] md:text-[22px] sm:text-[18px] vvsm:hidden sm:block'>
              Contact
            </a>
            <div className='bg-gray-300 w-[1px] h-[20px] vvsm:hidden sm:block'></div>
            <a href='#' className='josefinSans text-[#ffff] md:text-[22px] sm:text-[18px] vvsm:hidden sm:block'>
              Policies
            </a>
            <div className='bg-gray-300 w-[1px] h-[20px] vvsm:hidden sm:block'></div>
            <a href='#' className='josefinSans text-[#ffff] md:text-[22px] sm:text-[18px] vvsm:hidden sm:block'>
              Terms & Conditions
            </a>
            <div className='bg-gray-300 sm:w-[1px]  h-[20px] vvsm:hidden sm:block'></div>
            <a href='#' className='josefinSans text-[#ffff] md:text-[22px] sm:text-[18px]vvsm:text-[20px] '>
              Collection
            </a>
            <div className='bg-gray-300 w-[1px] h-[20px] vvsm:hidden sm:block'></div>
            <a href='#' className='josefinSans text-[#ffff] md:text-[22px] sm:text-[18px]  vvsm:text-[20px]'>
              Store Location
            </a>
          </div>
          {/* Logopart */}
          <div className='  flex flex-col justify-center items-center w-[100%] h-[100px] vsm:mt-[20px] vvsm:mt-[5px]'>
            <img src={izalogo} alt='' className='sm:w-[80px] sm:h-[100px] vvsm:w-[60px] vvsm:h-[60px]' />
            <div className='josefinSans text-[#ffff]'>
              Copyright &copy; izaapparals.com{' '}
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default SixthPage
