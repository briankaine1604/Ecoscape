"use client"

import Image from 'next/image';

import {BiDonateHeart} from 'react-icons/bi'
import {FaCanadianMapleLeaf} from 'react-icons/fa'


const Topstories = () => {
  
    const boxcon= [
        {index: 1,Title:'Climate Crisis Chronicles',Description:' Impact of Global Warming on Nature and Our Planet', position:'justify-start', image:'globalwarming'},

        {index: 2,Title:'Waterfall Wonders',Description:"Capturing the Artistry of Nature's Cascading Beauty", position:'justify-start',image:'nature'},

        {index: 3,Title:'Frozen Giants',Description:'The Impact of Glacial Melting on Mountain Habitats', position:'justify-start',image:'hiking'},
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
            <div className='h-96 w-2/6 relative shadow-lg'>
            <Image
                fill={true}
                style={{objectFit:"cover"}}
                src="/image/hands.jpg"
                alt="Feed the nation"
                loading="lazy"
                />
            </div>
            <div className=' w-3/6 h-96 gothic shadow-lg p-3'>
                <div className='flex text-2xl font-semibold justify-between '>Empower Nature's Guardians <BiDonateHeart className='text-5xl '/> </div>
                
                <div className='text-xl mt-2 text-justify w-10/12'>Join us in transforming lives and landscapes in third-world nations. Your donation fuels sustainable projects, conserves habitats, and empowers local communities. 
                    Together, let's create a greener future and protect the heartbeat of our planet. Be a catalyst for change today!</div>
            </div>
        </div>
        <div className='head1 gothic border-hidden mt-20 mx-auto'>TOP STORIES</div>
    <div className=' flex justify-center'>
        {boxcon.map(({index,image,Description, Title})=>(
             <div key={index} className='flex-col mx-5 shadow-lg w-full'>
             <div className='sm:w-full sm:h-72 bg-black relative'>
             <Image
                fill={true}
                style={{objectFit:"cover"}}
                src={`/image/${image}.jpg`}
                alt={Description}
                loading="lazy"
                />
                
             </div>
             <div className='w-40 h-40 sm:w-72 sm:h-72 gothic p-5 '>
             <div className='text-3xl font-medium'>{Title}</div>
             <div className='text-lg'>{Description}</div>
             </div>
         </div>
        ))}

    </div>
    
    </div>
  )
}

export default Topstories