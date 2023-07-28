"use client"
import Image from "next/image"

const Categories = () => {

  const catcards= [
    {index:1,Title:'Green life',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'order-2',box2:'order-1',image:'greenlife',alttext:'Picture of a beautiful Forest'},
    {index:2,Title:'Wild life',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'order-1',box2:'order-2',image:'wildlife',alttext:'Picture of a beautiful Forest'},
    {index:3,Title:'Nature Landmarks ',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'order-2',box2:'order-1',image:'naturelandmark',alttext:'Picture of a beautiful Forest'},
    {index:4,Title:'Nature News',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'order-1',box2:'order-2',image:'naturenews',alttext:'Picture of a beautiful Forest'},
    {index:5,Title:'Nature Travels',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'order-2',box2:'order-1',image:'naturetravel',alttext:'Picture of a beautiful Forest'},
  ]
  return (
    <div className='relative gothic mt-20 flex flex-col '>
        <div className='head1'>
        THE ECOSYSTEM
        </div >
        
          <div className=" mx-auto">
            {catcards.map(({index,Title,description,box1,box2,image,alttext})=>(
              <div key={index} className="icard ">
              <div className={`categories diveffect ${box1}`}>
              <div className="text-2xl">{Title} </div>
              <div className="text-lg">{description}</div>
              </div>
              <div className={`relative h-52 w-52 custom-image box2 ${box2}`}>
                <Image
                fill={true}
                style={{objectFit:"cover"}}
                src={`/image/${image}.jpg`}
                alt={alttext}
                loading="lazy"
                />
              </div>
              </div>
            ))}          
       
          </div>
    </div>
  )
}

export default Categories