import express from "express"
import { Conexion } from "../db.js";

//obtiene todos los usuarios
export const ObtenerAllUsers = async (req, res) => {
    try {
        const [response] = await Conexion.query("select * from usuarios");
        res.send(response)
    } catch (error) {
        return res.status(505).json({
            message: "something goes wrong"
        })
        
    }
}

// obtiene un usuario por id
export const AskOneUser = async (req, res) => {
    try {
        const data = req.params;
        const [response] = await Conexion.query("select * from usuarios where Id_User=?", [data.id]);
        res.send(response)
    } catch (error) {
        return res.status(505).json({
            message: "something goes wrong"
        })
    }
}

//agregar un nuevo usuario
export const AddNewUsers = async (req, res) => {
    const data = req.body;
    try {
        const [response] = await Conexion.query("INSERT INTO usuarios (Id_User,Nom_User,Ape_User,Tel_User,Ema_User,Dir_User,Pass_User,Id_Rol_FK) VALUES (?,?,?,?,?,?,?,?)", [data.Id_User, data.Nom_User, data.Ape_User, data.Tel_User, data.Ema_User, data.Dir_User, data.Pass_User, data.Id_Rol_FK]);

        if (response.affectedRows <= 0) return res.status(404).json({
            message: "User not found"
        })

        res.sendStatus(204);
    } catch (error) {
        return res.status(505).json({
            message: "something goes wrong"
        })
    }
}

//Elimina un nuevo usuario
export const UpdateUsers = async (req, res) => {
    try {
        const dataId = req.params;
        const data = req.body;
        const [response] = await Conexion.query("UPDATE usuarios SET Nom_User = IFNULL(?, Nom_User),Ape_User = IFNULL(?, Ape_User),Tel_User = IFNULL(?, Tel_User),Ema_User = IFNULL(?, Ema_User),Dir_User = IFNULL(?, Dir_User),Pass_User = IFNULL(?, Pass_User),Id_Rol_FK = IFNULL(?, Id_Rol_FK) WHERE Id_User = ? ", [data.Nom_User, data.Ape_User, data.Tel_User, data.Ema_User, data.Dir_User, data.Pass_User, data.Id_Rol_FK, dataId.id]);
        if (response.affectedRows <= 0) return res.status(404).json({
            message: "User not found"
        })

        res.sendStatus(204);
    } catch (error) {
        return res.status(505).json({
            message: "something goes wrong"
        })
    }
}

//Elimina un nuevo usuario
export const DeleteUsers = async (req, res) => {
    try {
        const data = req.params;
        const [response] = await Conexion.query("DELETE from usuarios WHERE Id_User = ? ", [data.id]);
        if (response.affectedRows <= 0) return res.status(404).json({
            message: "User not found"
        })

        res.sendStatus(200);
    } catch (error) {
        return res.status(505).json({
            message: "something goes wrong"
        })
    }
}