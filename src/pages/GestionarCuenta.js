import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/GestionarCuenta.css'

function GestionarCuenta() {
  return (
    <div >
    <Navbar></Navbar>
    <main className='gestionar-cuenta'>
        <h1>¡Realiza trámites de manera confiable y segura!</h1>
        <p>Tenemos las siguientes opciones para ti </p>
        <div className="gestionar-cuenta__contenido">
            <section className="gestionar-cuenta__contenido__menu">
                <h3 className="gestionar-cuenta__title">Cuenta</h3>
                <ul className="gestionar-cuenta__list">
                    <li><a href="#" id="aperturarCuenta">Aperturar nueva cuenta</a></li>
                    <li><a href="#" id="suspenderCuenta">Suspender cuenta temporalmente</a></li>
                    <li><a href="#" id="reactivarCuenta">Reactivar cuenta</a></li>
                    <li><a href="#" id="cerrarCuenta">Cerrar cuenta</a></li>
                </ul>
            </section>
            <section className="gestionar-cuenta__info" id="info">

            </section>
        </div>
    </main>
    <Footer></Footer>
    </div>

  )
}

export default GestionarCuenta