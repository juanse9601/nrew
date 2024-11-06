// tests/puedeVotar.test.ts

// Importa la función puedeVotar para probarla
import { puedeVotar } from '../src/puedeVotar';

// Prueba que devuelve true si la persona tiene 18 años o más
test('devuelve true si la persona tiene 18 años o más', () => {
  // Espera que la función devuelva true para una edad de 20
  expect(puedeVotar(20)).toBe(true);
});

// Prueba que devuelve false si la persona es menor de 18 años
test('devuelve false si la persona es menor de 18 años', () => {
  // Espera que la función devuelva false para una edad de 16
  expect(puedeVotar(16)).toBe(false);
});

// Prueba que lanza un error si la edad es negativa
test('lanza un error si la edad es negativa', () => {
  // Verifica que la función lanza el mensaje de error al usar una edad negativa
  expect(() => puedeVotar(-5)).toThrow("La edad no puede ser negativa.");
});
