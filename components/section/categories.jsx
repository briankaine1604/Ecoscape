"use client"
import Image from "next/image"

const Categories = () => {
  return (
    <div className='relative gothic top-24  flex flex-col '>
        <div className='text-3xl font-bold w-fit mx-auto border-black text-center border-b-4 mb-4'>
        Our Ecosystem
        </div >
        
          <div className=" mx-auto">

          <div className="icard">
          <div className="categories order-2  ">
          <div className="text-2xl">Green life </div>
          <div>Examining the Resilience of Coral Reefs and Ocean Life</div>
          </div>
          <div className="relative h-52 w-52 order-1">
            <Image
            fill={true}
            style={{objectFit:"cover"}}
            src="/image/greenlife.jpg"
            alt='Picture of a beautiful Forest'
            />
          </div>
          </div>
          
          <div className="icard">
          <div className="categories order-1">
          <div className="text-2xl">Wild life </div>
          <div>Examining the Resilience of Coral Reefs and Ocean Life</div>
          </div>
          <div className="relative h-52 w-52 order-2">
          <Image
            fill={true}
            style={{objectFit:"cover"}}
            src="/image/wildlife.jpg"
            alt='Picture of a beautiful Forest'
            />
          </div>
          </div>

          <div className="icard">
          <div className="categories order-2"><div className="text-2xl">Nature Landmarks </div>
          <div>Examining the Resilience of Coral Reefs and Ocean Life</div>
          </div>
          <div className="relative h-52 w-52 order-1">
          <Image
            fill={true}
            style={{objectFit:"cover"}}
            src="/image/naturelandmark.jpg"
            alt='Picture of a beautiful Forest'
            />
          </div>
          </div>

          <div className="icard">
          <div className="categories order-1"><div className="text-2xl">Nature News</div>
          <div>Examining the Resilience of Coral Reefs and Ocean Life</div>
          </div>
          <div className="relative h-52 w-52 order-2">
          <Image
            fill={true}
            style={{objectFit:"cover"}}
            src="/image/naturenews.jpg"
            alt='Picture of a beautiful Forest'
            />
          </div>
          </div>

          <div className="icard">
          <div className="categories order-2"><div className="text-2xl">Nature Travels </div>
          <div>Examining the Resilience of Coral Reefs and Ocean Life</div>
          </div>
          <div className="relative h-52 w-52 order-1">
          <Image
            fill={true}
            style={{objectFit:"cover"}}
            src="/image/naturetravel.jpg"
            alt='Picture of a beautiful Forest'
            />
          </div>
          </div>
       
          </div>
    </div>
  )
}

export default Categories