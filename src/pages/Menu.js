import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import CardMenu from '../components/CardMenu'
import '../styles/Menu.css'

export default function Menu() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='cards__menu'>
        <CardMenu />
        <CardMenu />
        <CardMenu />
      </div>
      <Footer></Footer>
    </div>
    
  )
}
