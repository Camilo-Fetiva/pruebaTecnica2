import { Component, inject } from '@angular/core';

// DEPENDENCIAS NECESARIAS
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

// EMPLEADOS
import { Empleados } from '../../interfaces/empleados';
import { EmpleadosService } from '../../services/empleados.service';

// METODO 
import { NgFor } from '@angular/common';

// FORMULARIO
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-empleados',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor, FormsModule],
  templateUrl: './form-empleados.component.html',
  styleUrl: './form-empleados.component.css'
})
export class FormEmpleadosComponent {
  // 1. INJECT de las dependencias a usar
  _empleados = inject(EmpleadosService)

  // 2. Declaracion de variables
  allEmpleados: Empleados[] = [];

  // VARIABLES PARA LAS PETICIONES
  Codigo: number = 0;
  Nombre: string = "";
  Apellido1: string = "";
  Apellido2: string = "";
  editMode: boolean = false;
  editEmpleadoId: string | undefined | null = null;

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

  // Usar el metodo -> ngOnInit
  ngOnInit() {
    this.obtenerEmpleados();
  };
}
