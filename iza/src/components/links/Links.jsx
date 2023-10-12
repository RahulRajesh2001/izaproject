import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoFacebook} from 'react-icons/bi';
import {AiOutlineTwitter} from 'react-icons/ai';


const Links = () => {
  return (
    <div className='  vvsm:hidden sm:block'>
        <div className='flex flex-col justify-evenly items-center  w-[50px]'>
          <div className='bg-[#252525] w-[1px] h-[130px]'></div>
        <div className='flex flex-col justify-evenly items-center h-[200px] '>
        <a  href='#'><AiOutlineInstagram size={20}/></a>
        <a href='#'><BiLogoFacebook  size={20}/></a>
        <a href='#'><AiOutlineTwitter  size={20}/></a>
        </div>
        <div className='bg-[#252525] w-[1px] h-[130px]'></div>
        </div>
       
    </div>
  )
}

export default Links