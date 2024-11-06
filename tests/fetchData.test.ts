import { fetchData } from '../src/fetchData';

test('carga de datos asíncrona', async () => {
  const data = await fetchData();
  expect(data).toBe('Datos cargados');
});