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
        <div className='relative w-full h-96 bg-black my-10 flex justify-center items-center'>
             <Image
                fill={true}
                style={{objectFit:"cover"}}
                src="/image/sapling.jpg"
                alt="Feed the nation"
                loading="lazy"
                />
                <div className='absolute text-white gothic'>
                    <div className='text-3xl sm:text-5xl md:text-6xl flex justify-center font-bold'>3 Million Trees Strong: </div>
                    <div className='text-xl sm:text-3xl md:text-3xl flex justify-center'>Over 3,150,940+ Trees planted<FaCanadianMapleLeaf className='ml-3'/></div>
                </div>
        </div>
        
        
            <div className='group hidden sm:flex-col w-full md:w-10/12 md:h-72 gap-4 md:grid grid-cols-3 justify-center mx-auto'>
            <div className=' relative w-full h-52 overflow-hidden col-span-1'>
            <Image
                fill={true}
                style={{objectFit:"cover"}}
                src="/image/hands.jpg"
                alt="Feed the nation"
                loading="lazy"
                className='transition ease-in-out  group-hover:scale-[1.1] duration-200 delay-75'
                />
            </div>
            <div className='  gothic col-span-2'>
                <div className='flex text-2xl font-semibold justify-between mr-10 mt-5 ml-10  items-center pl-2'>Empower Nature's Guardians <BiDonateHeart className='text-6xl '/> </div>
                
                <div className='text-xl mt-2 text-justify w-full md:w-9/12 ml-12  '>Join us in transforming lives and landscapes in third-world nations. Your donation fuels sustainable projects, conserves habitats, and empowers local communities. 
                    Together, let's create a greener future and protect the heartbeat of our planet. Be a catalyst for change today!</div>
            </div>
            </div>
       
        <div className='head1 gothic border-hidden mt-20 mx-auto hidden'>TOP STORIES</div>
    <div className='flex-col md:grid grid-cols-3 p-2 gap-4 w-full lg:w-10/12 mx-auto mt-10'>
        {boxcon.map(({index,image,Description, Title})=>(
             <div key={index} className='flex-col  shadow-lg group '>
             <div className='w-full h-40 sm:h-72 relative overflow-hidden'>
             <Image
                fill={true}
                style={{objectFit:"cover"}}
                src={`/image/${image}.jpg`}
                alt={Description}
                loading="lazy"
                className='transition ease-in-out  group-hover:scale-[1.1] duration-200 delay-75'
                />
                
             </div>
             <div className='w-full sm:h-fit gothic p-5'>
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