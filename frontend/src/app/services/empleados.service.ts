// USAR EL INJECT
import { Injectable, inject } from '@angular/core';

// Uso del cliente HTTP para realizar las peticiones
import { HttpClient } from '@angular/common/http';

// INTERFAZ
import { Empleados } from '../interfaces/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  // INYECCION EL CLIENTE
  private _httpClient = inject(HttpClient);

  // RUTA DE CONEXION CON EL BACKEND
  private URL_EMPLEADOS = 'http://localhost:3000/empleados';

  // PETICIONES

  // POST
  postEmpleados(empleados: Empleados){
    return this._httpClient.post(this.URL_EMPLEADOS + '/crear', empleados);
  };

  // GET
  getEmpleados(){
    return this._httpClient.get(this.URL_EMPLEADOS + '/obtener');
  };

  // PUT
  putEmpleados(empleadoActualized:Empleados, idForUpdate:string){
    // Para actualizar se necesita el body y el ID del usuario
    return this._httpClient.put(this.URL_EMPLEADOS + '/actualizar/' + idForUpdate, empleadoActualized);
  }

  // PETICION DELETE
  deleteEmpleados(idForDelete: string){
    return this._httpClient.delete(this.URL_EMPLEADOS + '/eliminar/' + idForDelete)
  }
}
