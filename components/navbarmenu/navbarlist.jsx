import Link from "next/link"

const Navbarlist = () => {
  return (
    <div className='grid grid-cols-4  '>
        <div className='navlist'><Link className="border" href="/">Logo</Link></div>
        <ul className='grid grid-cols-5 text-white gothic gap-10 w-auto h-fit col-span-2'>
        <li className='navlist'>
           <Link href="/">Home</Link>
        </li>
        <li className='navlist'>
        <Link href="/blog">Blog</Link>
        </li>
        <li className='navlist'>
        <Link href="/about">About</Link>
        </li>
        <li className='navlist'>
        <Link href="/donate">Donate</Link>
        </li>
        <li className='navlist'>
        <Link href="/subscribe">Subscribe</Link>
        </li>
        </ul>
        <div className='navlist '>
        <button className="navlist flex px-7 text-olivegreen font-bold py-2 rounded-3xl bg-white gothic">Sign In</button>
        </div>
    </div>
  )
}

export default Navbarlist