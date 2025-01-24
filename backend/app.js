// IMPORTAR LAS DEPENDENCIAS
import express from 'express'; //importar express para la prueba en la terminal
import dotenv from 'dotenv'; //Dependencia para manejar variables de entorno
import { connectionMongo } from './src/config/database.js'; // dependencia para conectar la base de datos

// IMPORTAR LAS RUTAS
import { empleadosRouter } from './src/routes/empleados.routes.js';
import { departamentosRouter } from './src/routes/departamentos.routes.js';

// CONFIGURAR EL USO DEL SERVIDOR CON MONGO
const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use('/empleados', empleadosRouter);
app.use('/departamentos', departamentosRouter);

// INVOACR LA BASE DE DATOS DE MONGO
connectionMongo();

// EJECTUTAR EL PROYECTO EN EL PC
app.listen(port, () => {
    console.log ('Soy el server ejecutandose correctamente en el puerto', port);
});