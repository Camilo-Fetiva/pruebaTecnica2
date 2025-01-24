// // IMPORTAR CONTROLADORES Y DEPENDENCIAS
import { postDepartamento, getDepartamento, putDepartamentoById, deleteDepartamentoById } from '../controllers/departamentos.controller.js';
import express from 'express';

// CONFIGURAR ROUTER
export const departamentosRouter = express.Router();

// RUTAS PARA LAS PETICIONES

// POST
departamentosRouter.post('/crear', postDepartamento);

// GET
departamentosRouter.get('/obtener', getDepartamento);

// PUT
departamentosRouter.put('/actualizar/:id', putDepartamentoById);

// DELETE
departamentosRouter.delete('/eliminar/:id', deleteDepartamentoById);