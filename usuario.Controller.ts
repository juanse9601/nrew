import { IsEmail, IsNotEmpty, Length, IsInt, Min, Max } from 'class-validator';
import 'reflect-metadata'; // Importación necesaria para el uso de decoradores


export class Usuario {

    id: number | undefined ; 

    
    @IsNotEmpty({ message: 'El nombre no debe estar vacío' })
    @Length(2, 50, { message: 'El nombre debe tener entre 2 y 50 caracteres' })
    nombre : string;

    
    @IsNotEmpty({ message: 'El correo electrónico no debe estar vacío' })
    @IsEmail({}, { message: 'El correo electrónico no es válido' })
    email :string | undefined;

    @IsInt({ message: 'La edad debe ser un número entero' })
    telefono : string | undefined;


    constructor(infoCliente : { id: number, nombre : string, email :string, telefono : string}){

        this.id = infoCliente.id;
        this.nombre = infoCliente.nombre;
        this.email = infoCliente.email;
        this.telefono = infoCliente.telefono;

    }

}


  

