import React from 'react'
import {BsInstagram, BsTwitter, BsFacebook, BsWhatsapp} from 'react-icons/bs'
import {BiLogoGmail, BiCopyright} from 'react-icons/bi'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='relative w-full bg-olivegreen h-44 mt-10 flex justify-center '>
      <div className='flex w-1/3 justify-between absolute bottom-4'>
      <Link href='#'><BsInstagram className='text-3xl text-white'/></Link>
      <Link href='#'><BsTwitter className='text-3xl text-white'/></Link>
      <Link href='#'><BsWhatsapp className='text-3xl text-white'/></Link>
      <Link href='#'><BsFacebook className='text-3xl text-white'/></Link>
      <Link href='#'><BiLogoGmail className='text-3xl text-white'/></Link>
      
      </div >
      <div className='mt-10 flex justify-between w-3/4'>
        <div className='flex-col'>
        <div className='footText flex align-middle items-center'><BiCopyright className=''/> 2023 EcoScape.  All rights reserved.</div>
        <div className='footText'>Contact: +2347068802091 </div>
        </div>
        
          <button className='text-white pr-4 border border-white w-1/5 h-fit p-2'>Sign up for our newsletter</button>
        
      </div>
    </div>
  )
}

export default Footer