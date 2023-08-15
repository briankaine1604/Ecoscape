"use client"
import Link from "next/link"
import Image from "next/image"
import Dropdown from '@components/burgermenu/dropdownmenu'
import {signIn,signOut} from 'next-auth/react'

const Navbarlist = () => {
  return (
    <div className='lg:grid grid-cols-4 flex justify-between'>
        <div className='navlist text-white'>
        <Link className="w-40 h-20 relative" href="/"> 
          <Image src="/image/ecoscape.png" 
          className="" 
          alt="" 
          fill={true}
          style={{objectFit:"cover"}}/> 
          </Link>
        </div>
        <ul className='lg:grid grid-cols-5 text-white gothic gap-10 w-auto h-fit col-span-2 hidden'>
        <Link href="/"> 
        <li className='navlist  hover:border-b-2'>
        Home
        </li>
        </Link>
        <Link href="/blog">
          <li className='navlist  hover:border-b-2'>
        Blog
        </li>
        </Link>
        <Link href="/donate">
        <li className='navlist  hover:border-b-2'>
        Donate
        </li>
        </Link>
        <Link href="/store">
        <li className='navlist  hover:border-b-2'>
        Store
        </li>
        </Link>
        <Link href="/subscribe">
        <li className='navlist  hover:border-b-2'>
        Subscribe
        </li>
        </Link>
        </ul>
        <div className='navlist '>
        <div className='lg:hidden border'><Dropdown/></div>
        <button className="navlist lg:flex px-7 text-olivegreen font-bold py-2 rounded-3xl bg-white gothic hidden hover:drop-shadow-2xl" onClick={signIn}> Sign In </button>
        </div>
    </div>
  )
}

export default Navbarlist