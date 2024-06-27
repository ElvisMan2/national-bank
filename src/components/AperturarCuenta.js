import React from 'react'
import '../styles/AperturarCuenta.css'

function AperturarCuenta() {
  async function crearCuenta() {
    
    try {
      const user = localStorage.getItem('user');
  
      if (!user) {
        throw new Error('No se encontró información del usuario en localStorage');
      }
  
      const userObject = JSON.parse(user);
      const url = `http://104.248.7.1:8080/api/bankAccount/create/${userObject.id}`;
  
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error en la creación de la cuenta: ${errorText}`);
      }else{
        alert('Cuenta creada de manera exitosa');
        window.location.href = './gestionar-cuenta';
      }
  
    } catch (error) {
      console.error('Error al crear la cuenta:', error.message);
    }
  }
  


  function handleClick() {
    const pin = document.getElementById('pin').value
    const confirmarPin = document.getElementById('confirmar-pin').value
    const user = localStorage.getItem('user')
    const userObject = JSON.parse(user)
    const password=userObject.password


    if (pin === password && pin === confirmarPin) {
      crearCuenta();
    }
    else{
      if (pin==='' || confirmarPin===''){
        alert('Por favor complete los campos')
      }else{
        if (pin !== confirmarPin){
          alert('Las contraseñas no coinciden')
        }else{
          alert('Contraseña incorrecta')
        }
      }

      
    }

    }

    

  return (
    <div className="crear-cuenta-form">
      <h2>Nueva Cuenta</h2>
      <img src={require('../images/tarjeta01.png')} alt="" />
      <form id="crearCuentaForm2">
        <label htmlFor="pin">Para aperturar una cuenta, ingrese su contraseña</label><br />
        <input id="pin" type="password" placeholder="Ingrese contraseña" required /><br />
        <label htmlFor="confirmar-pin">Confirmar Contraseña</label><br />
        <input id="confirmar-pin" type="password" placeholder="Confirme su contraseña" required />
      </form>
      <button id="nueva-cuenta2" onClick={handleClick}>Continuar</button>
    </div>
  )
}

export default AperturarCuenta