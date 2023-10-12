import React from 'react'
import izalogo from '../../assets/izalogo.svg'
import { RiMenu3Fill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className=' sm:hidden flex items-center justify-between   w-[95%]  vvsm:h-[70px]'>
     <img src={izalogo} alt="" className='sm:w-[70px] sm:h-[70px] vvsm:w-[50px] vvsm:h-[50px]' />
     <RiMenu3Fill  size={25}/>
    </div>
  )
}

export default Navbar