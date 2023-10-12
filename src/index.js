import express from "express"; // para poder importar modulos debes establecer: "type": "modules" en package.js
import RoutesUsers from "./routes/users.routes.js"
import { config } from "dotenv";
import {PORT} from "../src/config.js"

const app = express(); // creacion del servidor

//para que se puedan interpretar los datos recibidos en formato json 
app.use(express.json());

//rutas de acceso

app.use(RoutesUsers);// express puede usar las rutas creadas en el archivo de rutas

// si la ruta que escribe el cliente no existe muestra el mensaje de error
app.use((req,res,next)=>{
    res.status(404).json({
        message:"Not Found"
    })
})

app.listen(PORT); // puerto del servidor

console.log("El servidor se ejecuta en el server:", PORT);