# Proyecto: Validación de Formulario

## Violación 1: Complejidad Cognitiva Elevada

### Descripción:
SonarLint detectó que la función `validateForm` tenía una **complejidad cognitiva** de 22, lo cual excedía el límite permitido de 15. Esto ocurría debido a la gran cantidad de condiciones anidadas y validaciones dentro de una única función. La función era difícil de entender y mantener debido a su longitud y la cantidad de decisiones que debía tomar.

### Corrección/Refactorización:
La función fue dividida en varias funciones más pequeñas, cada una encargada de una validación específica (por ejemplo, validar el DNI, validar el nombre, etc.). Además, se implementaron **retornos tempranos** para evitar la anidación de condiciones y reducir la complejidad.

### Fragmento de Código Antes de la Corrección:
```javascript
const validateForm = async (event) => {
    event.preventDefault();

    const dni = event.target['dni'].value.trim();
    const nombre = event.target['nombre'].value.trim();
    const apellidos = event.target['apellidos'].value.trim();
    const correo = event.target['correo'].value.trim();
    const celular = event.target['celular'].value.trim();
    const fechaNacimiento = event.target['fechaNacimiento'].value.trim();
    const password = event.target['password'].value.trim();
    const passwordConfirmed = event.target['passwordConfirmed'].value.trim();

    setErrorMessage('');

    let valid = true;

    if (!dni) {
        setErrorMessage('El número de documento es obligatorio.');
        valid = false;
    } else if (documentType === 'DNI' && !/^\d{8}$/.test(dni)) {
        setErrorMessage('El DNI debe tener 8 dígitos.');
        valid = false;
    } else if (documentType === 'Carnet de Extranjeria' && !/^[a-zA-Z0-9]{9}$/.test(dni)) {
        setErrorMessage('El Carnet de Extranjería debe tener 9 caracteres alfanuméricos.');
        valid = false;
    }

    if (!nombre) {
        setErrorMessage('El nombre es obligatorio.');
        valid = false;
    }

    // Otras validaciones similares...
};

