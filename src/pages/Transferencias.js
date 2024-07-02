import React from 'react'
import '../styles/Transferencias.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

function Transferencias() {
  const [tipo,setTipo] = useState(0)//0: transferencias entre cuentas propias, 1: a cuentas externas

  useEffect(() => {
    if(tipo===0){
      document.getElementById('externa').style.display = 'none';
      document.getElementById('interna').style.display = 'block';
    }

    if(tipo===1){
      document.getElementById('externa').style.display = 'block';
      document.getElementById('interna').style.display = 'none';
    }

  }, [tipo])


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
            <input type="radio" name="transferType" value="betweenAccounts" id="betweenAccounts"  onChange={() => setTipo(0)} defaultChecked/> Entre cuentas propias
            <input type="radio" name="transferType" value="toExternalAccounts" id="toExternalAccounts" onChange={() => setTipo(1)} /> A cuentas externas
        </div>

        <div className="cuentaOrigen">
            <label htmlFor="cuentaOrigen">Seleccione la cuenta de origen</label><br />
            <select name="cuentaOrigen" id="cuentaOrigen">
            </select>
        </div>

        <div className="cuentaDestino" id='interna'>
            <label htmlFor="cuentaDestino">Seleccione la cuenta de destino</label><br />
            <select name="cuentaDestino" id="cuentaDestino">
            </select>
        </div>

        <div className="cuentaDestinoExterna" id='externa'>
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
