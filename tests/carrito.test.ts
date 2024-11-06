import { Carrito } from '../src/carrito';

test('agrega productos al carrito', () => {
  const carrito = new Carrito();
  carrito.agregarProducto('Manzana');
  carrito.agregarProducto('Banana');
  expect(carrito.obtenerProductos()).toEqual(['Manzana', 'Banana']);
});