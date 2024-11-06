// src/puedeVotar.ts

// Exporta la función que determina si una persona puede votar según su edad
export function puedeVotar(edad: number): boolean {
    // Verifica si la edad es negativa
    if (edad < 0) {
      // Lanza un error si la edad es inválida (negativa)
      throw new Error("La edad no puede ser negativa.");
    }
  
    // Si la edad es menor a 18, devuelve false indicando que no puede votar
    if (edad < 18) {
      return false;
    }
  
    // Si la edad es 18 o mayor, devuelve true indicando que puede votar
    return true;
  }
  