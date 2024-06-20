import React from 'react';
import styles from '../styles/Registro.module.css'; // Asegúrate de usar la ruta correcta al archivo CSS
import logo from '../images/logo.png';

export default function Registro() {
  return (
    <div className={styles.registroContenedor}>
      <div className={styles.card}>
        <img src={logo} alt="logo" className={styles.logo} />
        <form className={styles.registro}>
          <div>
            <select name="document-type" required className={styles.documentType}>
              <option value="DNI">DNI</option>
              <option value="Carnet de Extranjeria">Carnet de Extranjeria</option>
            </select>
            <input type="text" name="dni" required placeholder="Número de documento" className={styles.dni} />
            <input type="text" name="nombre" required placeholder="Nombres completos" className={styles.input} />
            <input type="text" name="apellidos" required placeholder="Apellidos completos" className={styles.input} />
            <input type="email" name="correo" required placeholder="Correo electrónico" className={styles.input} />
            <input type="text" name="celular" placeholder="Celular" required className={styles.celular} />
            <input type="text" name="fechaNacimiento" required placeholder="Fecha de nacimiento"
              onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => e.target.type = 'text'}
              className={styles.fechaNacimiento} />
            <input type="password" name="password" required placeholder="Clave web" className={styles.input} />
            <input type="password" name="passwordConfirmed" required placeholder="Confirmar clave web" className={styles.input} />
            <span className={styles.errorMessage}></span>
            <button type="submit" className={styles.registrar}>Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
