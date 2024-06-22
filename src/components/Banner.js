import React from 'react'
import '../styles/Banner.css'

function Banner() {
  return (
    <div className="banner">
        <h1>¡Bienvenido, <span id="user-name">user name</span>!</h1>
        <p>Navega seguro en tu banca por internet</p>
    </div>
  )
}

export default Banner
