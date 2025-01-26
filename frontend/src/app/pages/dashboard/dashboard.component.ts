import { Component, inject } from '@angular/core';

// DEPENDENCIAS NECESARIAS
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

//EMPLEADOS 
import { Empleados } from '../../interfaces/empleados';
import { EmpleadosService } from '../../services/empleados.service';

// Departamentos
import { Departamentos } from '../../interfaces/departamentos';
import { DepartamentosService } from '../../services/departamentos.service';

import { NgFor } from '@angular/common';

// FORMULARIO
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // 1. INJECT de las dependencias a usar
  _empleados = inject(EmpleadosService)
  _departamentos = inject(DepartamentosService)

  // 2. Declaracion de variables
  allEmpleados: Empleados[] = [];
  allDepartamentos: Departamentos[] = [];

  // VARIABLES PARA LAS PETICIONES EMPLEADOS
  Codigo: number = 0;
  Nombre: string = "";
  Apellido1: string = "";
  Apellido2: string = "";
  editMode: boolean = false;
  editEmpleadoId: string | undefined | null = null;
  showDivEmpleado: boolean = false;

  // VARIABLES PARA LAS PETICIONES DEPARTAMENTOS
  NombreDepartamento: string = "";
  CodigoDepartamento: number = 0;
  editDepartamentoId: string | undefined | null = null;
  showDivDepartamentos: boolean = false;

  // MOSTRAR EL FORMULARIO EMPLEADOS
  toggleDivEmpleados() {
    this.showDivEmpleado = !this.showDivEmpleado;
    if (!this.showDivEmpleado) {
      this.Codigo = 0;
      this.Nombre = '';
      this.Apellido1 = '';
      this.Apellido2= '';
      this.NombreDepartamento='';
      this.CodigoDepartamento = 0;
      this.editMode = false;
      this.editEmpleadoId = null;
      this.editDepartamentoId = null;
    }
  }

  // MOSTRAR EL FORMULARIO DEPARTAMENTO
  toggleDivDepartamento() {
    this.showDivDepartamentos = !this.showDivDepartamentos;
    if (!this.showDivDepartamentos) {
      this.NombreDepartamento='';
      this.CodigoDepartamento = 0;
      this.editMode = false;
      this.editEmpleadoId = null;
      this.editDepartamentoId = null;
    }
  }

  // EMPLEADOS
  // PETICION POST
  crearEmpleado() {
    if (this.Codigo === 0 || this.Nombre === '' || this.Apellido1 === '' || this.Apellido2 === '') {
      alert('Ingrese todos los campos');
    } else {
      const nuevoEmpleado: Empleados = {
        Codigo: this.Codigo,
        Nombre: this.Nombre,
        Apellido1: this.Apellido1,
        Apellido2: this.Apellido2,
      };

      this._empleados.postEmpleados(nuevoEmpleado).subscribe({
        next: (res: any) => {
          if (res) {
            console.log('res', res);
            alert('Empleado creado satisfactoriamente');
            this.obtenerEmpleados();
          } else {
            console.error('Hubo un error');
          }
        },
        error: (err) => {
          console.error('Hubo un error', err);
        }
      });
    }
  }
  // PETICION GET (OBTENER)
  obtenerEmpleados() {
    // Traer la dependencias del servicio y usar los metodos
    this._empleados.getEmpleados().subscribe(
      {
        // Manejo de errores
        next: (res: any) => {
          // Cuando sale correcto
          console.log(res.datos);
          // Guardar los datos en la variable
          this.allEmpleados = res.datos;
          console.log(this.allEmpleados); //Puede eliminarse
        },
        error: (error: any) => {
          // Cuando sale incorrecto
          console.log(error);
        }
      }
    );
  }

  //MODIFICAR EMPLEADOS
  identificarId(id: string | undefined) {
    this.editEmpleadoId = id;
    this.editMode = true;
    this.showDivEmpleado = true;
    console.log(this.editEmpleadoId);
  }

  // PETICION PUT
  modificarEmpleado() {
    console.log('Entré'); //Puede eliminarse
    console.log(this.editEmpleadoId, this.Codigo, this.Nombre, this.Apellido1, this.Apellido2);

    if (!this.Nombre || !this.Apellido1 || !this.Apellido2 || this.Codigo <= 0) {
      alert('Ingrese todos los campos');
    } else if (this.editEmpleadoId) {
      const empleadoActualizado: Empleados = {
        Codigo: this.Codigo,
        Nombre: this.Nombre,
        Apellido1: this.Apellido1,
        Apellido2: this.Apellido2,
      };

      this._empleados.putEmpleados(empleadoActualizado, this.editEmpleadoId).subscribe({
        next: (res: any) => {
          if (res) {
            console.log('res', res);
            alert('Empleado actualizado satisfactoriamente');
            this.obtenerEmpleados();
            this.toggleDivEmpleados();
          } else {
            console.error('Hubo un error');
          }
        },
        error: (err) => {
          console.error('Hubo un error', err);
        }
      });
    }
  }

  // PETICION DELETE
  borrarEmpleado(idForDelete: any) {
    console.log('Empleado a borrar:', idForDelete);

    this._empleados.deleteEmpleados(idForDelete).subscribe({
      next: (res: any) => {
        if (res) {
          console.log('res', res);
          alert('Empleado eliminado satisfactoriamente')
          this.obtenerEmpleados();
        } else {
          console.error('Hubo un error');
        }
      },
      error: (err) => {
        console.error('Hubo un error', err);
      }
    });
  }

  // DEPARTAMENTOS
  // PETICION POST
  crearDepartamento() {
    if (this.NombreDepartamento === '' || this.CodigoDepartamento === 0) {
      alert('Ingrese todos los campos');
    } else {
      const nuevoDepartamento: Departamentos = {
        Nombre: this.NombreDepartamento,
        CodigoDepartamento: this.CodigoDepartamento,
      };

      this._departamentos.postDepartamento(nuevoDepartamento).subscribe({
        next: (res: any) => {
          if (res) {
            console.log('res', res);
            alert('Departamento creado satisfactoriamente');
            this.obtenerDepartamentos();
          } else {
            console.error('Hubo un error');
          }
        },
        error: (err) => {
          console.error('Hubo un error', err);
        }
      });
    }
  }

  // PETICION GET (OBTENER)
  obtenerDepartamentos() {
    // Traer la dependencias del servicio y usar los metodos
    this._departamentos.getDepartamento().subscribe(
      {
        // Manejo de errores
        next: (res: any) => {
          // Cuando sale correcto
          console.log(res.datos);
          // Guardar los datos en la variable
          this.allDepartamentos = res.datos;
          console.log(this.allDepartamentos); //Puede eliminarse
        },
        error: (error: any) => {
          // Cuando sale incorrecto
          console.log(error);
        }
      }
    );
  }

  //MODIFICAR DEPARTAMENTOS
  identificarIdDepartamentos(id: string | undefined) {
    this.editDepartamentoId = id;
    this.editMode = true;
    this.showDivDepartamentos = true;
    console.log(this.editDepartamentoId);
  }

  // PETICION PUT
  modificarDepartamento() {
    console.log('Entré'); //Puede eliminarse
    console.log(this.editDepartamentoId, this.NombreDepartamento, this.CodigoDepartamento);

    if (!this.NombreDepartamento || this.CodigoDepartamento <= 0) {
      alert('Ingrese todos los campos');
    } else if (this.editDepartamentoId) {
      const departamentoActualizado: Departamentos = {
        Nombre: this.NombreDepartamento,
        CodigoDepartamento: this.CodigoDepartamento
      };

      this._departamentos.putDepartamento(departamentoActualizado, this.editDepartamentoId).subscribe({
        next: (res: any) => {
          if (res) {
            console.log('res', res);
            alert('Departamento actualizado satisfactoriamente');
            this.obtenerDepartamentos();
            this.toggleDivDepartamento();
          } else {
            console.error('Hubo un error');
          }
        },
        error: (err) => {
          console.error('Hubo un error', err);
        }
      });
    }
  }

  // PETICION DELETE
  borrarDepartamento(idForDelete: any) {
    console.log('Departamento a borrar:', idForDelete);

    this._departamentos.deleteDepartamento(idForDelete).subscribe({
      next: (res: any) => {
        if (res) {
          console.log('res', res);
          alert('Departamento eliminado satisfactoriamente')
          this.obtenerDepartamentos();
        } else {
          console.error('Hubo un error');
        }
      },
      error: (err) => {
        console.error('Hubo un error', err);
      }
    });
  }

  // Usar el metodo -> ngOnInit
  ngOnInit() {
    this.obtenerDepartamentos();
    this.obtenerEmpleados();
  };
}
