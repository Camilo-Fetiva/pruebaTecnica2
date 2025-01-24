// IMPORTAR DEPENDENCIAS Y MODELOS
import { empleadosModel } from "../models/empleados.model.js";

// LOGICA DE LAS PETICIONES

// POST
export const postEmpleado = async (request, response) =>{
    try {
        const {Codigo, Nombre, Apellido1, Apellido2, CodigoDepartamento} = request.body;

        const newEmpleado = await empleadosModel.create({Codigo, Nombre, Apellido1, Apellido2, CodigoDepartamento});

        return response.status(201).json({
            mensaje: "Empleado creado satisfactoriamente",
            datos: newEmpleado
        });
        
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Error al crear un empleado',
            problema: error.message
        });
    }
}

// GET
export const getEmpleado = async (request, response) => {

    try {
        let empleados = await empleadosModel.find()

        if(empleados.length === 0){
            return response.status(200).json({
                mensaje : 'No hay empleados',
            });
        }

        return response.status(200).json({
            mensaje :'Estos son los empleados encontrados',
            datos: empleados
        });

    } catch (error) { 
        return response.status(400).json({
            mensaje: 'Error al mostrar los empleados',
            problema: error || error.message
        });
    }
}

// PUT
export const putEmpleadoById = async (request, response) => {

    try {
        let idForPut = request.params.id; //Parametro ID del producto a actualizar
        let dataForUpdate = request.body; // Informacion actualizada

        const empleadoUpdated = await empleadosModel.findByIdAndUpdate(idForPut, dataForUpdate); // Parametro del ID  y luego parametro de la info actualizada

        if(!empleadoUpdated){
            return response.status(404).json ({
                mensaje: "No se encontro un empleado para actualizar"
            });
        }

        return response.status(200).json({
            mensaje: "Se actualizo el empleado correctamente",
            datos: empleadoUpdated
        })

    } catch (error) {
        return response.status(400).json({
            mensaje: "Ocurrio un error al actualizar el empleado",
            problem: error || error.message
        });
    }
}

// DELETE
export const deleteEmpleadoById = async (request, response) => {

    try {
        let idForDelete = request.params.id;
        await empleadosModel.findByIdAndDelete(idForDelete); 
        return response.status(200).json({
            mensaje: "Empleado eliminado satisfactoriamente"
        });


    } catch (error) {
        return response.status(400).json({
            mensaje: "Ocurrio un error al eliminar el empleado",
            problem: error || error.message
        });
    }
}