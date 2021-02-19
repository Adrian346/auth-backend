const express = require('express');
const cors = require('cors');
const path = require('path');
const dbConnection = require('./db/config');
const { response } = require('express');
require('dotenv').config();

//Crear el servidor/aplicacion de express 
const app = express();

//Base de datos
dbConnection();

//Directorio publico
app.use( express.static('public') )

//CORS
app.use(cors());

//Lectura y Parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

//Demas rutas
app.get( '*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ));
})

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});