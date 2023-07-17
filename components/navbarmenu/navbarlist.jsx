"use client"
import Link from "next/link"
import Image from "next/image"
import Dropdown from '@components/burgermenu/dropdownmenu'

const Navbarlist = () => {
  return (
    <div className='md:grid grid-cols-4 flex justify-between'>
        <div className='navlist text-white'><Link className="" href="/"> <Image src="/image/bikwhite.png" className="" width={170} height={170} alt=""/> </Link></div>
        <ul className='md:grid grid-cols-5 text-white gothic gap-10 w-auto h-fit col-span-2 hidden'>
        <li className='navlist  hover:border-b-2'>
           <Link href="/">Home</Link>
        </li>
        <li className='navlist  hover:border-b-2'>
        <Link href="/blog">Blog</Link>
        </li>
        <li className='navlist  hover:border-b-2'>
        <Link href="/about">About</Link>
        </li>
        <li className='navlist  hover:border-b-2'>
        <Link href="/donate">Donate</Link>
        </li>
        <li className='navlist  hover:border-b-2'>
        <Link href="/subscribe">Subscribe</Link>
        </li>
        </ul>
        <div className='navlist '>
        <div className='md:hidden border'><Dropdown/></div>
        <button className="navlist md:flex px-7 text-olivegreen font-bold py-2 rounded-3xl bg-white gothic hidden hover:drop-shadow-2xl ">Sign In</button>
        </div>
    </div>
  )
}

export default Navbarlist