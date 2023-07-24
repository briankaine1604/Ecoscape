"use client"
import Image from "next/image"

const Categories = () => {

  const catcards= [
    {Title:'Green life',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'order-2',box2:'order-1',image:'greenlife',alttext:'Picture of a beautiful Forest'},
    {Title:'Wild life',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'order-1',box2:'order-2',image:'wildlife',alttext:'Picture of a beautiful Forest'},
    {Title:'Nature Landmarks ',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'order-2',box2:'order-1',image:'naturelandmark',alttext:'Picture of a beautiful Forest'},
    {Title:'Nature News',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'order-1',box2:'order-2',image:'naturenews',alttext:'Picture of a beautiful Forest'},
    {Title:'Nature Travels',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'order-2',box2:'order-1',image:'naturetravel',alttext:'Picture of a beautiful Forest'},
  ]
  return (
    <div className='relative gothic mt-20 flex flex-col '>
        <div className='head1'>
        THE ECOSYSTEM
        </div >
        
          <div className=" mx-auto">
            {catcards.map((catcard,index)=>(
              <div key={index} className="icard ">
              <div className={`categories diveffect ${catcard.box1}`}>
              <div className="text-2xl">{catcard.Title} </div>
              <div className="text-lg">{catcard.description}</div>
              </div>
              <div className={`relative h-52 w-52 custom-image box2 ${catcard.box2}`}>
                <Image
                fill={true}
                style={{objectFit:"cover"}}
                src={`/image/${catcard.image}.jpg`}
                alt={catcard.alttext}
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