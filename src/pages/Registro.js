import React from 'react';
import '../styles/Registro.css'; 
import logo from '../images/logo.png';

export default function Registro() {
  return (
    <div className='registro__container'>
      <div className='registro__card'>
        <img src={logo} alt="logo" className='registro__logo' />
        <form className='form__registro'>
          <div>
            <select name="document-type" required className='registro__documentType'>
              <option value="DNI">DNI</option>
              <option value="Carnet de Extranjeria">Carnet de Extranjeria</option>
            </select>
            <input type="text" name="dni" required placeholder="Número de documento" className='registro__dni' />
            <input type="text" name="nombre" required placeholder="Nombres completos" className='registro__input' />
            <input type="text" name="apellidos" required placeholder="Apellidos completos" className='registro__input' />
            <input type="email" name="correo" required placeholder="Correo electrónico" className='registro__input' />
            <div>
              <input type="text" name="celular" placeholder="Celular" required className='registro__celular' />
              <input type="text" name="fechaNacimiento" required placeholder="Fecha de nacimiento"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => e.target.type = 'text'}
                className='registro__fechaNacimiento' />
            </div>
            
            <input type="password" name="password" required placeholder="Clave web" className='registro__input'/>
            <input type="password" name="passwordConfirmed" required placeholder="Confirmar clave web" className='registro__input'/>
            <span className='registro__errorMessage'></span>
            <button type="submit" className='registro__boton'>Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
