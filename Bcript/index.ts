import { saveUserWithPolicy, getUser, comparePassword } from './passwordManager'; 
import express from 'express';
// Importa las funciones 'saveUser', 'getUser' y 'comparePassword' desde el archivo 'passwordManager' 
//para su uso en este archivo.

const main = async () => { // Define una función asíncrona llamada 'main'. Esta será la función principal
    // donde se ejecutará la lógica.
    const username = 'usuarioPrueba'; // Define una variable 'username' que contiene el nombre de usuario
    // que se quiere usar para pruebas.
    const password = 'miContraseñaSegura'; // Define una variable 'password' que contiene la contraseña que 
    //se quiere encriptar y guardar.

    // Guardar el usuario en la base de datos
    await saveUserWithPolicy(username, password); // Llama a la función 'saveUser' para guardar el nombre de usuario 
    //y la contraseña en la base de datos. Usa 'await' para esperar a que la operación se complete antes de
    // continuar.
    console.log('Usuario guardado en la base de datos.'); // Imprime en la consola un mensaje confirmando
    // que el usuario ha sido guardado.

    // Obtener el usuario de la base de datos
    const user = await getUser(username); // Llama a la función 'getUser' para recuperar el usuario con el 
    //nombre de usuario proporcionado. Almacena el resultado en la variable 'user'.
    if (user) { // Verifica si se ha encontrado un usuario. Si 'user' no es nulo o indefinido, significa que
        // se encontró.
        console.log('Usuario recuperado:', user); // Imprime en la consola el usuario recuperado y sus detalles.

        // Comparar la contraseña ingresada con el hash
        const isMatch = await comparePassword(password, user.password); // Llama a la función 'comparePassword'
        // para verificar si la contraseña proporcionada coincide con el hash almacenado en la base de datos. 
        //Almacena el resultado en la variable 'isMatch'.
        console.log('¿La contraseña coincide?', isMatch); // Imprime en la consola si la contraseña ingresada 
        //coincide con el hash (true o false).
    } else { // Si 'user' es nulo o indefinido (no se encontró un usuario),
        console.log('Usuario no encontrado.'); // Imprime un mensaje indicando que no se pudo encontrar al usuario.
    }
};

// Ejecutar la función principal
main().catch(console.error); // Llama a la función 'main' para que se ejecute. Si ocurre algún error durante 
//la ejecución de 'main', captura el error y lo imprime en la consola.


