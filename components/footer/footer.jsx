import React from 'react'
import {BsInstagram, BsTwitter, BsFacebook, BsWhatsapp} from 'react-icons/bs'
import {BiLogoGmail, BiCopyright} from 'react-icons/bi'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='relative w-full bg-black h-44 mt-10 flex justify-center'>
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
        <div className='pr-4 '>
          <form action="/send-data-here" method="post" className='flex-col flex'>
            
          <div className=''><label for="mail" className='footText' >Subscribe to our weekly news letter</label></div>
          <input type="email" id="email" name="email" placeholder='johnwill@gmail.com' className='p-2'/>
          <div><button type="submit">Sign up</button></div>
          
        </form>
        </div>
      </div>
    </div>
  )
}

export default Footer