import React from 'react'
import '../styles/Transferencias.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Transferencias() {
  return (
    <div>
      <Navbar></Navbar>
      <div id='transferencias'>
        <h1>¡Realiza transferencias de manera confiable y segura!</h1>

        <div className="contenido-transferencias">
            <img src={require('../images/tranferencia.png')} alt="imagen transferencia" />
            <p>Transfiere entre tus cuentas y cuentas externas </p>
        </div>

        <div className="transferencias">
            <input type="radio" name="transferType" value="betweenAccounts" id="betweenAccounts" /> Entre cuentas propias
            <input type="radio" name="transferType" value="toExternalAccounts" id="toExternalAccounts" /> A cuentas externas
        </div>

        <div className="cuentaOrigen">
            <label htmlFor="cuentaOrigen">Seleccione la cuenta de origen</label><br />
            <select name="cuentaOrigen" id="cuentaOrigen">
            </select>
        </div>

        <div className="cuentaDestino">
            <label htmlFor="cuentaDestino">Seleccione la cuenta de destino</label><br />
            <select name="cuentaDestino" id="cuentaDestino">
            </select>
        </div>

        <div className="cuentaDestinoExterna">
            <label htmlFor="cuentaDestinoExterna">Ingrese la cuenta de destino</label><br />
            <input type="text" id="cuentaDestinoExterna" />
        </div>

        <div className="montoTransferir">
            <label htmlFor="montoTransferir">Ingrese el monto a transferir en soles</label><br />
            <input type="text" id="montoTransferir" />
        </div>

        <button id="ejecutarTransferencia" className="ejecutarTransferencia">Transferir</button>
      </div>
      <Footer></Footer>
    </div>
    
  )
}

export default Transferencias
