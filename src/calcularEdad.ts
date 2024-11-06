// src/calcularEdad.ts
// src/calcularEdad.ts

// Exporta la función para calcular la edad dado un año de nacimiento
export function calcularEdad(anioNacimiento: number): number {
    // Obtiene el año actual usando la fecha del sistema
    const anioActual = new Date().getFullYear();
  
    // Verifica si el año de nacimiento es mayor que el año actual
    if (anioNacimiento > anioActual) {
      // Lanza un error si el año de nacimiento es inválido (futuro)
      throw new Error("El año de nacimiento no puede ser mayor al año actual.");
    }
  
    // Verifica si el año de nacimiento es menor o igual a cero
    if (anioNacimiento <= 0) {
      // Lanza un error si el año de nacimiento es inválido (negativo o cero)
      throw new Error("El año de nacimiento debe ser un número positivo.");
    }
  
    // Calcula y devuelve la edad restando el año de nacimiento al año actual
    return anioActual - anioNacimiento;
  }
  
  