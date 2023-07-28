"use client"

import React from 'react'


const Topstories = () => {
  
    const boxcon= [
        {index: 1,Title:'Tourist Attraction',Description:'Best Nature landmarks to visit', position:'justify-start'},

        {index: 2,Title:'Nature News',Description:'Best Nature landmarks to visit', position:'justify-start'},

        {index: 3,Title:'Donation',Description:'Research and Development', position:'justify-start'},
    ]
   
    return (

    <div className='p-5 flex-col relative items-center border border-red-500'>
        <div className='head1 gothic border-hidden mt-20 mx-auto'>TOP STORIES</div>
        
        <div className='flex justify-center'>
            <div className='h-64 w-80 bg-black'></div>
            <div className='bg-gray-200 w-2/5 h-64'></div>
        </div>
    <div className=' p-5 flex justify-center'>
        {boxcon.map((box)=>(
             <div key={box.index} className='flex my-2'>
             <div className='w-40 h-40 sm:w-64 sm:h-52 bg-black rounded mx-4'></div>
             <div className='flex'>
             <div className='w-fit text-2xl hidden'>{box.Title}</div>
             <div className='w-60 hidden'>{box.Description}</div>
             </div>
         </div>
        ))}

    </div>
    
    </div>
  )
}

export default Topstories