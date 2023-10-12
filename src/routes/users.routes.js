import {Router} from "express"; // crear rutas
import { Conexion } from "../db.js";
import { ObtenerAllUsers,AddNewUsers,AskOneUser ,DeleteUsers,UpdateUsers} from "../controllers/users.controllers.js"; 

const router = Router();

// establecemos todas las rutas de los usuarios en este caso
router.get("/users", ObtenerAllUsers)

router.get("/users/:id", AskOneUser)

router.post("/users/Add", AddNewUsers)

router.patch("/users/Update/:id", UpdateUsers)

router.delete("/users/Delete/:id", DeleteUsers)

export default router;