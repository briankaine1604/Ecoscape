
import MainImage from '@components/main/main'
import Categories from '@components/section/categories'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      
      <div className='h-4/5'><MainImage/></div>
      <Categories/>
    </div>
  )
}

export default Home