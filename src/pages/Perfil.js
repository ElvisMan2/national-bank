import React from 'react'
import '../styles/Perfil.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Perfil() {
  return (
    <div>
      <Navbar />

      <div id='perfil'>
        <section className='banner-lateral'>
          <img className="userPhoto" alt="foto" src={require('../images/foto-usuario.png')} />
          <h3 id="nombre">NOMBRE</h3>
          <h3 id="apellido">APELLIDO</h3>
          <hr />
          <nav>
            <ul>
              <li><a href="./" id="cuenta">Mi Perfil</a></li>
              <li><a href="./" id="tarjeta">Estado de Cuentas</a></li>
            </ul>
          </nav>
          <img className="logo"  alt="logo empresa" src={require('../images/logo-blanco.png')} />
        </section>

        <div>
          <main>

          </main>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Perfil
