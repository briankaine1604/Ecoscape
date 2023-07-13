import '@/styles/global.css'
import Dropdown from '@components/burgermenu/dropdownmenu'
import Navbar from '@components/navbarmenu/navbar'


const Rootlayout = ({children}) => {
  return (
    <html>
        <body>
        <div className=''><Navbar/></div>
              
              <div className='sm:hidden'><Dropdown/></div>
            <main className='h-1/2'>
              
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout