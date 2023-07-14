"use client"
import Link from "next/link"
import Dropdown from '@components/burgermenu/dropdownmenu'

const Navbarlist = () => {
  return (
    <div className='md:grid grid-cols-4 flex justify-between'>
        <div className='navlist border '><Link className="border" href="/">Logo</Link></div>
        <ul className='md:grid grid-cols-5 text-white gothic gap-10 w-auto h-fit col-span-2 hidden '>
        <li className='navlist'>
           <Link href="/">Home</Link>
        </li>
        <li className='navlist'>
        <Link href="/blog">Blog</Link>
        </li>
        <li className='navlist'>
        <Link href="/about">About</Link>
        </li>
        <li className='navlist'>
        <Link href="/donate">Donate</Link>
        </li>
        <li className='navlist'>
        <Link href="/subscribe">Subscribe</Link>
        </li>
        </ul>
        <div className='navlist '>
        <div className='md:hidden border'><Dropdown/></div>
        <button className="navlist md:flex px-7 text-olivegreen font-bold py-2 rounded-3xl bg-white gothic hidden">Sign In</button>
        </div>
    </div>
  )
}

export default Navbarlist