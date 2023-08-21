import '@/styles/global.css'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import Navbar from '@components/navbarmenu/navbar'
import Provider from '@components/provider/provider'



const Rootlayout = ({children}) => {
  return (
    <html>
        <body className='relative'>
          <Provider>
        <Navbar/>
            <main > 
                <div className='top-20 relative'>{children}</div>
            </main>
            <div className='absolute bottom-24'>< BsFillArrowUpCircleFill className='text-3xl text-olivegreen animate-bounce '/></div> 
            </Provider>
        </body>
    </html>
  )
}

export default Rootlayout