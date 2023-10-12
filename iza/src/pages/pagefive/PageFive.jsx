import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import subscribe from '../../assets/subscribe.png'
import footer from '../../assets/footer.png'
import word from '../../assets/word.png'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import mapimg from '../../assets/mapimg.png'
import izalogo from '../../assets/izalogo.svg'

const PageFive = () => {
  return (
    <div className='sm:snap-start flex flex-col justify-between items-center  h-screen bg-[#B0F2B4]  '>
      <Navbar />
      <div className='vvsm:hidden sm:block flex flex-col justify-center w-[100%] h-[150px] '>
          <div className='flex justify-around items-center w-[100%] h-[150px] '>
            <div className='flex flex-col'>
              <div className='playfair  lg:text-[30px]'>
                Subscribe our newsletter
              </div>
              <div className='playfair  lg:text-[30px]'>for latest update</div>
            </div>
            <div className='relative'>
              <input
                type='text'
                id='first_name'
                className='bg-[#A1A1A166] border border-gray-300 text-[#00000080] text-sm rounded-full block h-[40px] w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10'
                placeholder='mailid@example.com'
                required
              />
              <img
                className='absolute right-0 top-0 w-[150px] h-full'
                src={subscribe}
                alt=''
              />
            </div>
          </div>
        </div>
      
      {/* footer part */}
      <div className='flex justify-center items-center w-[100%] sm:h-[80%] vvsm:h-[93%] relative'>
        <img src={footer} alt="" className='absolute z-10  w-[100%] h-full'  />
        <img src={word} alt="" className='absolute z-20 w-[100%] h-full' />
        <div className=' flex flex-col justify-center items-center absolute z-30 w-[100%] h-[90%] bottom-0 gap-8'>
         {/* first part */}
          <div className='flex sm:flex-row vvsm:flex-col justify-around items-center w-[100%] '>
          <div className='flex sm:flex-col vvsm:flex-row sm:items-start vvsm:items-center gap-7' >
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

            {/* right side */}
            <div className=' flex'>
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

          {/* right first section */}
          <div className='flex justify-center items-center'>
          <img src={mapimg} alt='' className='sm:w-[350px] sm:h-[200px] vvsm:w-[90%] h-[200px]' />
          </div>
          </div>


          {/* second section */}
          <div className='flex sm:flex-row vvsm:flex-col  w-[100%] justify-evenly items-center'>
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
            <div className='w-[100%] border border-t-2 sm:hidden'></div>
            <a href='#' className='josefinSans text-[#ffff] md:text-[22px] sm:text-[18px]vvsm:text-[20px]  '>
              Collection
            </a>
            <div className='w-[100%] border border-t-2 sm:hidden'></div>
            <div className='bg-gray-300 w-[1px] h-[20px] vvsm:hidden sm:block'></div>
            <a href='#' className='josefinSans text-[#ffff] md:text-[22px] sm:text-[18px]  vvsm:text-[20px] '>
              Store Location
            </a>
            <div className='w-[100%] border border-t-2 sm:hidden'></div>
          </div>
          
          {/* third section */}
          <div className='flex flex-col justify-center items-center'>
          <img src={izalogo} alt='' className='sm:w-[80px] sm:h-[100px] vvsm:w-[60px] vvsm:h-[60px]' />
            <div className='josefinSans text-[#ffff]'>
              Copyright &copy; izaapparals.com{' '}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PageFive
