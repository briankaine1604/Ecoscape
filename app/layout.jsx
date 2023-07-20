import '@/styles/global.css'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import Navbar from '@components/navbarmenu/navbar'


const Rootlayout = ({children}) => {
  return (
    <html>
        <body className='relative'>
        <Navbar/>
            <main > 
                <div className='top-20 relative'>{children}</div>
            </main>
            <div className='absolute bottom-24'>< BsFillArrowUpCircleFill className='text-3xl text-olivegreen animate-bounce '/></div> 
        </body>
    </html>
  )
}

export default Rootlayout