// src/calcularDescuento.ts

// Exporta la función para calcular el precio con descuento
export function calcularDescuento(precio: number, descuento: number): number {
    // Verifica si el precio es negativo
    if (precio < 0) {
      // Lanza un error si el precio es negativo
      throw new Error("El precio no puede ser negativo.");
    }
  
    // Verifica que el descuento esté en el rango permitido de 0 a 100
    if (descuento < 0 || descuento > 100) {
      // Lanza un error si el descuento es inválido
      throw new Error("El descuento debe estar entre 0 y 100.");
    }
  
    // Calcula y devuelve el precio aplicando el descuento
    return precio - (precio * descuento / 100);
  }
  