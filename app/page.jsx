
import Footer from '@components/footer/footer'
import MainImage from '@components/main/main'
import Categories from '@components/section/categories'
import Keyprojects from '@components/section/keyprojects'
import Topstories from '@components/section/topstories'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      
      <MainImage/>
      <Keyprojects/>
      <Categories/>
      <Topstories/>
      <Footer/>
    </div>
  )
}

export default Home