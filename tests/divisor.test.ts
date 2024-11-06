// tests/divisor.test.ts
import { divisor } from '../src/divisor';

test('divide 6 por 2 para obtener 3', () => {
  expect(divisor(6, 2)).toBe(3);
});

test('lanza un error al dividir por 0', () => {
  expect(() => divisor(6, 0)).toThrow('No se puede dividir por cero');
});
