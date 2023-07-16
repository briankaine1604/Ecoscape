import '@/styles/global.css'

import Navbar from '@components/navbarmenu/navbar'


const Rootlayout = ({children}) => {
  return (
    <html>
        <body className=''>
        <Navbar/>
            <main > 
                <div className=''>{children}</div>
            </main>
        </body>
    </html>
  )
}

export default Rootlayout