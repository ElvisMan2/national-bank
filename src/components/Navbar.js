import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
        <ul className="navbar__nav">
            <li><a href="./menu">Inicio</a></li>
            <li><a href="./nosotros">Acerca de nosotros</a></li>
            <li><a href="./contacto">Contáctanos</a></li>
            <li><a href="./perfil">Mi perfil</a></li>
            <li ><a className='navbar__salir' href="./">Salir</a></li>
        </ul>
    </nav>
  )
}
