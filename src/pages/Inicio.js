import React from 'react'
import '../styles/Inicio.css'
import line from '../images/line.png'
import logo from '../images/logo.png'

export default function Inicio() {
    return (
        <div id='inicio'>
            <div className="card">
                <img id="logo" src={logo} alt="logo" />
                <form id="login">
                    <div>
                        <select id="document-type" name="document-type" required>
                            <option value="DNI">DNI</option>
                            <option value="Carnet de Extranjeria">Carnet de Extranjeria</option>
                        </select>
                        
                        <input type="text" id="dni" name="dni" placeholder="Número de documento" required /><br/>
                    </div>
                    <input type="password" id="password" name="password" required placeholder="Clave web" /><br/>

                    <span id="error-message" class="error-message"></span>

                    <button type="submit" id="ingresar">Ingresar</button>
                    <br />

                    <img src={line} alt='line' />
                    <button type="button" id="registrar" >Registrar</button>
                    <br />
                </form>
            </div>
        </div>
    )
}
