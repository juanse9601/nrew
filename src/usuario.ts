export interface Usuario {
    id: number;
    nombre: string;
    email: string;
  }
  
  export function crearUsuario(id: number, nombre: string, email: string): Usuario {
    return { id, nombre, email };
  }