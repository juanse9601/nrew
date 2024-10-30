const e = require('express');
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();


app.get("/api", (req, res) => {
    res.json({
        message: "Nodejs JWT Authentication"
    });
});


app.post("/api/login", (req, res) => {
    const user = {
        id: 1,
        nombre: "Juan",
        email: "juan@gmail.com",
    }

    jwt.sign({user}, 'secretkey', {expiresIn: '40s'}, (err, token) => {
        res.json({
            token
        });
    });


});



//ruta para usar el token
app.post("/api/posts", verifyToken, (req, res) => {
    
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if (error) {
            res.sendStatus(403);
        }else{
            res.json({
                mensaje: "Posts created successfully",
                authData
            });
        }
    }); 
});



//Authorization: Bearer <token>
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403);
    }
}



app.listen(3000, function(){
    console.log('Server is running on port 3000');
});
