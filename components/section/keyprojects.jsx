"use client"
import React, { useState, useEffect } from 'react'
import {IoIosArrowDropright} from 'react-icons/io'
import {IoIosArrowDropleft} from 'react-icons/io'
import Image from 'next/image'

const Keyprojects = () => {

    const projects =[
        {index: 1,title:'Citizen Science Programs',description:'Encourage users to participate in citizen science projects, where they can contribute to research and data collection efforts that aid in understanding and conserving nature.', image:'/image/citizenscience.jpg', alt:'Science conference' },
        {index: 2,title:'Nature Photography Contests',description:'Encourage users to participate in citizen science projects, where they can contribute to research and data collection efforts that aid in understanding and conserving nature.',image:'/image/photography.jpg', alt:'Photographer'},
        {index: 3,title:'Environmental Education in Schools',description:'Encourage users to participate in citizen science projects, where they can contribute to research and data collection efforts that aid in understanding and conserving nature.',image:'/image/education.jpg',alt:'Conserving nature'},
        {index: 4,title:'Plant Research',description:'Encourage users to participate in citizen science projects, where they can contribute to research and data collection efforts that aid in understanding and conserving nature.',image:'/image/plantresearch.jpg',alt:'Plant Science'},
    ]

    const[currentslide, setcurrentslide]= useState(0);

    const nextslide=()=>{
        setcurrentslide((slide)=>(slide + 1)% projects.length)
    }

    const prevslide=()=>{
        setcurrentslide((slide)=>(slide - 1 + projects.length)% projects.length)
    }

    useEffect(()=>{
        const interval= setInterval(nextslide,1000);
        return ()=> clearInterval(interval)
    },[])
  return (
    <div className=''>
        <div className='head1 gothic mt-20'>PROJECTS</div>
        <div className='flex drop-shadow-xl w-10/12 items-center justify-between bg-gray-50 mx-auto rounded-xl p-5 py-10'>
            {projects.map((project)=>(
                <div key={project.index} className='w-5/12 gothic'>
                <div className='text-2xl  font-medium'>{project.title}</div>
                <div className=''> {project.description}
                </div>
                <div className='w-1/2 flex items-center '>
                <button className='w-1/12 z-10' onClick={prevslide}><IoIosArrowDropleft className='text-4xl '/></button> 
                <div className='bg-black w-11/12 h-64 rounded-2xl'>
                <Image
                fill={true}
                style={{objectFit:"cover"}}
                src={project.image}
                alt={project.alt}
                loading="lazy"
                />
                </div>
                <button className='w-1/12 z-10' onClick={nextslide}><IoIosArrowDropright className='text-4xl '/></button>

            </div>
            </div>
            
            ))}
            
        </div>
    </div>
  )
}

export default Keyprojects