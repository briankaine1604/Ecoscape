import '@/styles/global.css'

import Navbar from '@components/navbarmenu/navbar'


const Rootlayout = ({children}) => {
  return (
    <html>
        <body className=''>
        <div className=''><Navbar/></div>
              
       
            <main className='h-1/2'>
              
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout