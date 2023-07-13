"use client"
import React from 'react'
import Image from 'next/image';
import Heading from './heading';


const MainImage = () => {
  return (
    <div> 
    
    <div className='absolute overflow-hidden h-4/5 w-full'>
    <Heading/> 
    <Image
    fill={true}
    style={{objectFit:"cover"}}
    src="/image/mainimage5.jpg"
    alt='picture of a beautiful Forest '
    /></div>
    </div>
  )
}

export default MainImage