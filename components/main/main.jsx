"use client"
import React from 'react'
import Image from 'next/image';
import Heading from './heading';


const MainImage = () => {
  return (
     
    
    <div className='relative top-20 overflow-hidden h-auto sm:py-32 w-full'>
    <Heading/> 
    <Image
    fill={true}
    style={{objectFit:"cover"}}
    src="/image/mainimage4.jpg"
    alt='picture of a beautiful Forest '
    /></div>
    
  )
}

export default MainImage