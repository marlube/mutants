'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CodigoDNA', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("La conexion a la base de datos esta funcionando correctamente");
    }
});