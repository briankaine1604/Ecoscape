"use client"

import React from 'react'


const Topstories = () => {
  
    const boxcon= [
        {index: 1,Title:'Tourist Attraction',Description:'Best Nature landmarks to visit', position:'justify-start'},

        {index: 2,Title:'Nature News',Description:'Best Nature landmarks to visit', position:'justify-center'},

        {index: 3,Title:'Donation',Description:'Research and Development', position:'justify-end'},
    ]
   
    return (

    <div className='p-5'>
        <div className='head1 gothic border-hidden mt-20'>TOP STORIES</div>
    <div className='border-2 border-black p-5 '>
        {boxcon.map((box)=>(
             <div key={box.index} className={`flex items-center align-middle my-2 border ${box.position}`}>
             <div className='w-40 h-40 sm:w-52 sm:h-52 bg-black rounded mr-2'></div>
             <div className='flex-col'>
             <div className='w-fit text-2xl'>{box.Title}</div>
             <div className='w-60'>{box.Description}</div>
             </div>
         </div>
        ))}

    </div>
    </div>
  )
}

export default Topstories