"use client"
import Link from "next/link"
import Image from "next/image"
import Dropdown from '@components/burgermenu/dropdownmenu'

const Navbarlist = () => {
  return (
    <div className='md:grid grid-cols-4 flex justify-between'>
        <div className='navlist text-white'><Link className="" href="/"> <Image src="/image/bikwhite.png" className="" width={170} height={170} alt=""/> </Link></div>
        <ul className='md:grid grid-cols-5 text-white gothic gap-10 w-auto h-fit col-span-2 hidden'>
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
        <Link href="/about">
        <li className='navlist  hover:border-b-2'>
        About
        </li>
        </Link>
        <Link href="/donate">
        <li className='navlist  hover:border-b-2'>
       Donate
        </li>
        </Link>
        <Link href="/subscribe">
        <li className='navlist  hover:border-b-2'>
        Subscribe
        </li>
        </Link>
        </ul>
        <div className='navlist '>
        <div className='md:hidden border'><Dropdown/></div>
        <button className="navlist md:flex px-7 text-olivegreen font-bold py-2 rounded-3xl bg-white gothic hidden hover:drop-shadow-2xl ">Sign In</button>
        </div>
    </div>
  )
}

export default Navbarlist