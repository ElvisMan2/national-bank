import React from 'react'
import '../styles/CardMenu.css'

function CardMenu() {
  return (
    <div className='card__menu'>
      
            <img src={require("../images/gestiona_cuenta.png")}  alt="Gestionar cuenta" />
            <div>
                <h3>Gestionar cuenta</h3><br/>
                <p>Tener una cuenta nunca fue tan fácil. Apertura de cuenta y familiarízate de todo...</p><br/>
                <a href="./gestionar-cuenta.html"  class="button">Ver más →</a>
            </div>

    </div>
  )
}

export default CardMenu
