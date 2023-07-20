"use client"
import Image from "next/image"

const Categories = () => {

  const catcards= [
    {Title:'Green life',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'2',box2:'1',image:'greenlife',alttext:'Picture of a beautiful Forest'},
    {Title:'Wild life',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'1',box2:'2',image:'wildlife',alttext:'Picture of a beautiful Forest'},
    {Title:'Nature Landmarks ',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'2',box2:'1',image:'naturelandmark',alttext:'Picture of a beautiful Forest'},
    {Title:'Nature News',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'1',box2:'2',image:'naturenews',alttext:'Picture of a beautiful Forest'},
    {Title:'Nature Travels',description:'Examining the Resilience of Coral Reefs and Ocean Life',box1:'2',box2:'1',image:'naturetravel',alttext:'Picture of a beautiful Forest'},
  ]
  return (
    <div className='relative gothic mt-20 flex flex-col '>
        <div className='head1 border-hidden'>
        THE ECOSYSTEM
        </div >
        
          <div className=" mx-auto">
            {catcards.map((catcard,index)=>(
              <div key={index} className="icard">
              <div className={`categories order-${catcard.box1}`}>
              <div className="text-2xl">{catcard.Title} </div>
              <div>{catcard.description}</div>
              </div>
              <div className={`relative h-52 w-52 order-${catcard.box2}`}>
                <Image
                fill={true}
                style={{objectFit:"cover"}}
                src={`/image/${catcard.image}.jpg`}
                alt={catcard.alttext}
                />
              </div>
              </div>
            ))}          
       
          </div>
    </div>
  )
}

export default Categories