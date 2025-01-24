// IMPORTAR CONTROLADORES Y DEPENDENCIAS
import { postEmpleado, getEmpleado, putEmpleadoById, deleteEmpleadoById } from "../controllers/empleados.controller.js";
import express from 'express';

// CONFIGURAR ROUTER
export const empleadosRouter = express.Router();

// RUTAS PARA LAS PETICIONES

// POST
empleadosRouter.post('/crear', postEmpleado);

// GET
empleadosRouter.get('/obtener', getEmpleado);

// PUT
empleadosRouter.put('/actualizar', putEmpleadoById);

// DELETE
empleadosRouter.delete('/eliminar', deleteEmpleadoById);