//IMPORTAR LAS DEPENDENCIAS
import mongoose from "mongoose";

// PLANTILLA DE DATOS
const empleadosSchema = new mongoose.Schema(
    {
        Codigo:{type: Number, required: true},
        Nombre:{type: String, required: true},
        Apellido1:{type: String, required: true},
        Apellido2:{type: String},
    }
)

// EXPORTAR EL MODELO
export const empleadosModel = mongoose.model('empleados', empleadosSchema);