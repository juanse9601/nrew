import { crearUsuario } from '../src/usuario';

test('crea un usuario correctamente', () => {
  const usuario = crearUsuario(1, 'Carlos', 'carlos@mail.com');
  expect(usuario).toMatchObject({
    id: 1,
    nombre: 'Carlos',
    email: 'carlos@mail.com'
  });
});