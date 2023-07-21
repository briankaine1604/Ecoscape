"use client"
import Link from "next/link"

const Heading = () => {
  return (
    <div className='sm:border-4 border-y-2 flex flex-col justify-center items-center border-white relative z-10 sm:p-0 p-16  my-5 sm:my-0 sm:w-80 sm:h-80 sm:left-10 sm:rounded-full text-center text-white mx-auto sm:mx-0 hover:cursor-pointer'>
        <Link href='/'><div className='text-6xl font-semibold gothic sm:ml-4 w-72'>EcoScape</div>
        <div className='text-2xl font-bold italiana sm:ml-4 w-72 '>Preserving Our Home for Future Generations</div></Link>
    </div>
  )
}

export default Heading