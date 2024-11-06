// tests/calcularEdad.test.ts

// Importa la función calcularEdad para probarla
import { calcularEdad } from '../src/calcularEdad';

// Prueba que calcula la edad correctamente para el año 2000
test('calcula la edad correctamente para el año 2000', () => {
  // Espera que la edad calculada sea la diferencia entre el año actual y 2000
  expect(calcularEdad(2000)).toBe(new Date().getFullYear() - 2000);
});

// Prueba que lanza un error si el año de nacimiento es mayor al año actual
test('lanza error si el año de nacimiento es mayor al año actual', () => {
  // Verifica que la función lanza el mensaje de error específico al usar un año en el futuro
  expect(() => calcularEdad(3000)).toThrow("El año de nacimiento no puede ser mayor al año actual.");
});

// Prueba que lanza un error si el año de nacimiento es negativo o cero
test('lanza error si el año de nacimiento es negativo o cero', () => {
  // Verifica que la función lanza el mensaje de error específico al usar un año negativo o cero
  expect(() => calcularEdad(0)).toThrow("El año de nacimiento debe ser un número positivo.");
});
