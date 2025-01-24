// IMPORTAR MODELO
import { departamentoModel } from "../models/departamentos.model.js";

// LOGICA DE LAS PETICIONES

// POST
export const postDepartamento = async (request, response) =>{
    try {
        const {Codigo, Nombre,CodigoDepartamento} = request.body;

        const newDepartamento = await departamentoModel.create({Codigo, Nombre,CodigoDepartamento});

        return response.status(201).json({
            mensaje: "Departamento creado satisfactoriamente",
            datos: newDepartamento
        });
        
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Error al crear un departamento',
            problema: error.message
        });
    }
}

// GET
export const getDepartamento = async (request, response) => {

    try {
        let departamento = await departamentoModel.find()

        if(departamento.length === 0){
            return response.status(200).json({
                mensaje : 'No hay Departamentos',
            });
        }

        return response.status(200).json({
            mensaje :'Estos son los departamentos encontrados',
            datos: departamento
        });

    } catch (error) { 
        return response.status(400).json({
            mensaje: 'Error al mostrar los departamentos',
            problema: error || error.message
        });
    }
}

// PUT
export const putDepartamentoById = async (request, response) => {

    try {
        let idForPut = request.params.id; //Parametro ID del producto a actualizar
        let dataForUpdate = request.body; // Informacion actualizada

        const departamentoUpdated = await departamentoModel.findByIdAndUpdate(idForPut, dataForUpdate); // Parametro del ID  y luego parametro de la info actualizada

        if(!departamentoUpdated){
            return response.status(404).json ({
                mensaje: "No se encontro un departamento para actualizar"
            });
        }

        return response.status(200).json({
            mensaje: "Se actualizo el departamento correctamente",
            datos: departamentoUpdated
        })

    } catch (error) {
        return response.status(400).json({
            mensaje: "Ocurrio un error al actualizar el departamento",
            problem: error || error.message
        });
    }
}

// DELETE
export const deleteDepartamentoById = async (request, response) => {

    try {
        let idForDelete = request.params.id;
        await departamentoModel.findByIdAndDelete(idForDelete); 
        return response.status(200).json({
            mensaje: "Departamento eliminado satisfactoriamente"
        });


    } catch (error) {
        return response.status(400).json({
            mensaje: "Ocurrio un error al eliminar el departamento",
            problem: error || error.message
        });
    }
}