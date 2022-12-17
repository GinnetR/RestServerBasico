const express = require('express');
const cors = require('cors')

class server {

    constructor() {
        this.app = express();
        this.Port= process.env.PORT;
        this.usuariosPath="/api/usuarios";

        //Middleware
        this.middlewares();
        // Rutas demi aplicacion 
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo
        this.app.use(express.json());


        //directorio publico
        this.app.use(express.static("public"));
    }

    routes() {
       this.app.use(this.usuariosPath,require ("../routes/user"));
    }

    listen() {

        this.app.listen(this.Port, () => {
            console.log("El servidor esta corriendo en el puerto", this.Port);
        });
    }

}


module.exports = server;