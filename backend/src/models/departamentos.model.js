//IMPORTAR LAS DEPENDENCIAS
import mongoose from "mongoose";

// PLANTILLA DE DATOS
const departamentoSchema = new mongoose.Schema(
    {
        Nombre:{type: String, required: true},
        CodigoDepartamento:{type: Number, required: true},
    }
)

// EXPORTAR EL MODELO
export const departamentoModel = mongoose.model('departamento', departamentoSchema);