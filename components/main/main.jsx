"use client"
import React from 'react'
import Image from 'next/image';
import Heading from './heading';


const MainImage = () => {
  return (
     
    
    <div className='relative overflow-hidden h-auto sm:py-20 w-full'>
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