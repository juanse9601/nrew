import bcrypt from 'bcrypt'; // Importa la librería 'bcrypt' para realizar operaciones de encriptación de contraseñas.
import { pool } from './config'; // Importa el 'pool' de conexiones a la base de datos desde el archivo 'config', 
//que permite ejecutar consultas SQL.
import { RowDataPacket } from 'mysql2'; // Importa 'RowDataPacket' de 'mysql2', que se utiliza para tipar las
// filas devueltas en las consultas a la base de datos.

// Función para encriptar una contraseña
export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10; // Número de rondas de sal. Cuantas más rondas, más segura será la contraseña, 
    //pero también más tiempo tomará el proceso.
    const hash = await bcrypt.hash(password, saltRounds); // Utiliza 'bcrypt' para crear un hash de la contraseña,
    // usando el número de rondas de sal especificado.
    return hash; // Retorna el hash generado.
};

// Función para comparar la contraseña ingresada con el hash almacenado
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    const match = await bcrypt.compare(password, hash); // Compara la contraseña proporcionada con el hash
    // almacenado usando 'bcrypt'.
    return match; // Retorna 'true' si las contraseñas coinciden, de lo contrario 'false'.
};

// Uso de la función con políticas de contraseña
// Se define una función que valida si la contraseña cumple con ciertas políticas de seguridad.
const validatePasswordPolicy = (password: string): boolean => {
    // Se utiliza una expresión regular (regex) para definir las reglas de la política de contraseña.
    // La política especifica que la contraseña debe:
    // - Contener al menos una letra minúscula (a-z).
    // - Contener al menos una letra mayúscula (A-Z).
    // - Contener al menos un dígito (0-9).
    // - Tener una longitud mínima de 8 caracteres.
    const policyRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Ejemplo de política

    // La función test() de la expresión regular se utiliza para verificar si la contraseña proporcionada
    // coincide con las reglas definidas en la regex. Devuelve true si coincide y false si no.
    return policyRegex.test(password);
};

// Función para guardar el usuario solo si la contraseña cumple la política
// Esta función recibe el nombre de usuario y la contraseña como parámetros.
export const saveUserWithPolicy = async (username: string, password: string) => {
    // Se llama a la función validatePasswordPolicy para comprobar si la contraseña cumple con las políticas.
    // Si la validación falla (es decir, la contraseña no cumple las políticas), se lanza un error.
    if (!validatePasswordPolicy(password)) {
        throw new Error('La contraseña no cumple con las políticas de seguridad.');
    }

    // Si la contraseña es válida, se procede a encriptarla utilizando la función hashPassword previamente definida.
    const hashedPassword = await hashPassword(password);

    // Aquí es donde se debe agregar la lógica para guardar el usuario en la base de datos.
    // Se debe utilizar el nombre de usuario y la contraseña encriptada (hashedPassword) para la inserción.
    // Ejemplo:
    // const result = await pool.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
};



// Función para obtener un usuario de la base de datos
export const getUser = async (username: string) => {
    const [rows]: [RowDataPacket[], any] = await pool.execute( // Ejecuta una consulta SQL para seleccionar todos
        // los datos del usuario cuyo nombre de usuario coincide.
        'SELECT * FROM users WHERE username = ?', // SQL para seleccionar todos los campos de la tabla 'users' 
        //donde el nombre de usuario es el proporcionado.
        [username] // Valor a buscar en la tabla: el nombre de usuario proporcionado.
    );
    return rows[0]; // Retorna el primer registro encontrado. Se asume que 'rows' es un arreglo de registros
    // y se obtiene el primero.
};
