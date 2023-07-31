"use client"

import Image from 'next/image';

import {BiDonateHeart} from 'react-icons/bi'
import {FaCanadianMapleLeaf} from 'react-icons/fa'


const Topstories = () => {
  
    const boxcon= [
        {index: 1,Title:'Tourist Attraction',Description:'Best Nature landmarks to visit', position:'justify-start', image:'globalwarming'},

        {index: 2,Title:'Nature News',Description:'Best Nature landmarks to visit', position:'justify-start',image:'nature'},

        {index: 3,Title:'Donation',Description:'Research and Development', position:'justify-start',image:'hiking'},
    ]
   
    return (

    <div className=' flex-col relative items-center '>
        <div className='relative w-full h-96  bg-black my-10 flex justify-center items-center'>
             <Image
                fill={true}
                style={{objectFit:"cover"}}
                src="/image/sapling.jpg"
                alt="Feed the nation"
                loading="lazy"
                />
                <div className='absolute text-white gothic'>
                    <div className='text-7xl flex justify-center font-bold'>3 Million Trees Strong: </div>
                    <div className='text-4xl flex justify-center'>Over 3,150,940+ Trees planted<FaCanadianMapleLeaf className='ml-3'/></div>
                </div>
        </div>
        
        
        <div className='flex justify-center w-fit '>
            <div className='h-72 w-80 relative shadow-lg'>
            <Image
                fill={true}
                style={{objectFit:"cover"}}
                src="/image/hands.jpg"
                alt="Feed the nation"
                loading="lazy"
                />
            </div>
            <div className=' w-3/6 h-72 gothic shadow-lg p-3'>
                <div className='flex text-2xl font-semibold justify-between '>Empower Nature's Guardians <BiDonateHeart className='text-5xl '/> </div>
                
                <div className='text-xl mt-2 text-justify w-10/12'>Join us in transforming lives and landscapes in third-world nations. Your donation fuels sustainable projects, conserves habitats, and empowers local communities. 
                    Together, let's create a greener future and protect the heartbeat of our planet. Be a catalyst for change today!</div>
            </div>
        </div>
        <div className='head1 gothic border-hidden mt-20 mx-auto'>TOP STORIES</div>
    <div className=' p-5 flex justify-center'>
        {boxcon.map(({index,image,description, Title})=>(
             <div key={index} className='flex my-2 '>
             <div className='w-40 h-40 sm:w-72 sm:h-64 bg-black mx-6 shadow-lg relative'>
             <Image
                fill={true}
                style={{objectFit:"cover"}}
                src={`/image/${image}.jpg`}
                alt={description}
                loading="lazy"
                />
             </div>
             <div className='flex'>
             <div className='w-fit text-2xl hidden'>{Title}</div>
             <div className='w-60 hidden'>{description}</div>
             </div>
         </div>
        ))}

    </div>
    
    </div>
  )
}

export default Topstories