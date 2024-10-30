
const express = require('express'); 
// Importa la librería 'express' y la asigna a la constante 'express' para poder usar sus funcionalidades.

const jwt = require('jsonwebtoken'); 
// Importa la librería 'jsonwebtoken' para poder crear y verificar tokens JWT.

const app = express(); 
// Inicializa una aplicación de Express y la asigna a la constante 'app' para manejar rutas y solicitudes.

app.get("/api", (req, res) => { 
    // Define una ruta GET en la ruta '/api'.
    res.json({
        message: "Nodejs JWT Authentication" 
    }); 
    // Responde con un objeto JSON que contiene un mensaje indicando que el servicio está funcionando.
});



app.post("/api/login", (req, res) => { 
    // Define una ruta POST en '/api/login' para el inicio de sesión.

    const user = { 
        id: 1,
        nombre: "Juan",
        email: "juan@gmail.com",
    }; 
    // Crea un objeto 'user' que representa al usuario que inicia sesión.

    jwt.sign({user}, 'secretkey', {expiresIn: '40s'}, (err, token) => { 
        // Genera un token JWT usando el objeto 'user', una clave secreta ('secretkey') y un tiempo de expiración de 40 segundos.
        // 'err' contendrá cualquier error que ocurra, y 'token' tendrá el token generado.

        res.json({
            token
        }); 
        // Responde con el token JWT en formato JSON para que el cliente pueda usarlo en futuras solicitudes.
    });
});




app.post("/api/posts", verifyToken, (req, res) => { 
    // Define una ruta POST en '/api/posts' que requiere un token para acceder.
    // La función 'verifyToken' actúa como middleware para verificar el token antes de ejecutar esta ruta.

    jwt.verify(req.token, 'secretkey', (error, authData) => { 
        // Verifica el token usando la clave secreta ('secretkey'). 
        // 'authData' contiene los datos autenticados del token si es válido, y 'error' contendrá algún error si el token es inválido.

        if (error) { 
            res.sendStatus(403); 
            // Si hay un error (el token es inválido o ha expirado), responde con un estado 403 (prohibido).
        } else { 
            res.json({
                mensaje: "Posts created successfully", 
                authData
            }); 
            // Si el token es válido, responde con un mensaje y los datos de autenticación.
        }
    });
});



// Authorization: Bearer <token>
function verifyToken(req, res, next) { 
    // Define una función de middleware 'verifyToken' para verificar el token en la solicitud.

    const bearerHeader = req.headers['authorization']; 
    // Obtiene el encabezado 'authorization' de la solicitud, que debería contener el token en el formato 'Bearer <token>'.

    if (typeof bearerHeader !== 'undefined') { 
        // Verifica si el encabezado está definido (es decir, si existe un token en la solicitud).

        const bearerToken = bearerHeader.split(' ')[1]; 
        // Divide el valor del encabezado en un array usando el espacio como delimitador y obtiene el segundo elemento, que es el token en sí.

        req.token = bearerToken; 
        // Almacena el token en 'req.token' para que pueda ser accedido por rutas posteriores.

        next(); 
        // Llama a 'next()' para pasar el control a la siguiente función en la ruta.
    } else { 
        res.status(403); 
        // Si no hay token, responde con un estado 403 (prohibido).
    }
}




app.listen(3000, function() { 
    // Inicia el servidor y escucha en el puerto 3000.

    console.log('Server is running on port 3000'); 
    // Muestra un mensaje en la consola indicando que el servidor está en ejecución en el puerto 3000.
});
