"use client"
import Link from "next/link"
import Image from "next/image"
import {signIn,signOut, useSession,getProviders} from 'next-auth/react'
import { useState,useEffect } from "react"
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

const Navbarlist = () => {

  const {data:session }= useSession();

  const [toggle, setToggle]= useState(false);

  const toggler = () => {
    setToggle((prev) => !prev);
  
    // Toggle body scrolling
    if (!toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  

  const [providers, setProviders]= useState(null);

  useEffect(()=>{
    const setUpProviders= async ()=>{
      const response= await getProviders();

      setProviders(response)
    }

    setUpProviders();
  },[])

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
        <div className='lg:hidden'>
        <button className="mr-5" onClick={toggler}><GiHamburgerMenu/></button>
        {toggle && (
  <ul
    className="flex-col absolute z-40 left-0 top-0 w-full h-screen bg-olivegreen"
  >
    {/*Mobile Navigation */}
    <button onClick={toggler} className="z-50 absolute top-4 right-4">
      <GrClose className="text-white text-2xl font-bold" />
    </button>
    <li>Home</li>
    <li>About</li>
    <li>Store</li>
    <div>
        {session?.user ? (
      <div  >
        <div>
          <Image
          src={session?.user.image}
          width={37}
          height={37}
          className="rounded-full"
          alt="profile"
          onClick={signOut}
          />
        </div>
      </div>
    ) : (
      providers &&
      Object.values(providers).map((provider) => (
        <button 
        type="button" 
        key={provider.name}  
        onClick={()=>signIn(provider.id)}>
          Sign In
        </button>
  ))
)}

          </div>
  </ul>
)}


          </div>
        <div>
        {session?.user ? (
     <div  >
     <div>
       <Image
       src={session?.user.image}
       width={37}
       height={37}
       className="rounded-full"
       alt="profile"
       onClick={signOut}
       />
     </div>
   </div>
    ) : (
      providers &&
      Object.values(providers).map((provider) => (
        <button 
        type="button" 
        key={provider.name} 
        className="navlist lg:flex px-7 text-olivegreen font-semibold py-2 rounded-3xl bg-white gothic hidden hover:drop-shadow-2xl" 
        onClick={()=>signIn(provider.id)}>
          Sign In
        </button>
  ))
)}

          </div>
        </div>
    </div>
  )
}

export default Navbarlist