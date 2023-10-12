//conexion con la base de datos
import {createPool} from "mysql2/promise" // si no esta /promise no funciona el await
import {DB_HOST,DB_PORT,DB_USER,DB_PASSWORD,DB_DATABASE} from "./config.js"
export const Conexion = createPool({
//objeto de conexion o datos de conexion
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE,
    port: DB_PORT
})
