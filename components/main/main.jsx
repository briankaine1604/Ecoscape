"use client"
import React from 'react'
import Image from 'next/image';
import Heading from './heading';


const MainImage = () => {
  return (
     
    
    <div className='relative overflow-hidden h-full w-full border border-red-500'>
    <Heading/> 
    <Image
    fill={true}
    style={{objectFit:"cover"}}
    src="/image/mainimage5.jpg"
    alt='picture of a beautiful Forest '
    /></div>
    
  )
}

export default MainImage