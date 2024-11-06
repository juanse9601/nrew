// tests/calcularDescuento.test.ts

// Importa la función calcularDescuento para probarla
import { calcularDescuento } from '../src/calcularDescuento';

// Prueba que calcula el precio con descuento correctamente
test('calcula el precio con descuento correctamente', () => {
  // Espera que el precio final sea 90 cuando se aplica un 10% de descuento a 100
  expect(calcularDescuento(100, 10)).toBe(90);
});

// Prueba que lanza un error si el precio es negativo
test('lanza un error si el precio es negativo', () => {
  // Verifica que la función lanza el mensaje de error específico al usar un precio negativo
  expect(() => calcularDescuento(-100, 10)).toThrow("El precio no puede ser negativo.");
});

// Prueba que lanza un error si el descuento es mayor al 100%
test('lanza un error si el descuento es mayor al 100%', () => {
  // Verifica que la función lanza el mensaje de error específico cuando el descuento excede 100
  expect(() => calcularDescuento(100, 150)).toThrow("El descuento debe estar entre 0 y 100.");
});

// Prueba que lanza un error si el descuento es menor al 0%
test('lanza un error si el descuento es menor al 0%', () => {
  // Verifica que la función lanza el mensaje de error específico cuando el descuento es negativo
  expect(() => calcularDescuento(100, -10)).toThrow("El descuento debe estar entre 0 y 100.");
});
