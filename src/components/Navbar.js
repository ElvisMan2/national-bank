import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
        <ul className="navbar__nav">
            <li><a href="./menu.html">Inicio</a></li>
            <li><a href="./web-construccion.html">Acerca de nosotros</a></li>
            <li><a href="./web-construccion.html">Contáctanos</a></li>
            <li><a href="./perfil.html">Mi perfil</a></li>
            <li ><a className='navbar__salir' href="./index.html">Salir</a></li>
        </ul>
    </nav>
  )
}
