// INJECT
import { Injectable, inject } from '@angular/core';

// Uso del cliente HTTP para realizar las peticiones
import { HttpClient } from '@angular/common/http';

// INTERFAZ
import { Departamentos } from '../interfaces/departamentos';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  // INYECCION EL CLIENTE
    private _httpClient = inject(HttpClient);
  
    // RUTA DE CONEXION CON EL BACKEND
    private URL_DEPARTAMENTOS = 'http://localhost:3000/departamentos';
  
    // PETICIONES
  
    // POST
    postDepartamento(departamento: Departamentos){
      return this._httpClient.post(this.URL_DEPARTAMENTOS + '/crear', departamento);
    };
  
    // GET
    getDepartamento(){
      return this._httpClient.get(this.URL_DEPARTAMENTOS + '/obtener');
    };
  
    // PUT
    putDepartamento(departamentoActualized:Departamentos, idForUpdate:string){
      // Para actualizar se necesita el body y el ID del usuario
      return this._httpClient.put(this.URL_DEPARTAMENTOS + '/actualizar/' + idForUpdate, departamentoActualized);
    }
  
    // PETICION DELETE
    deleteDepartamento(idForDelete: string){
      return this._httpClient.delete(this.URL_DEPARTAMENTOS + '/eliminar/' + idForDelete)
    }
}
