// Prueba de un método que manipula datos en un objeto:

export class Carrito {
    productos: string[] = [];
  
    agregarProducto(producto: string): void {
      this.productos.push(producto);
    }
  
    obtenerProductos(): string[] {
      return this.productos;
    }
  }