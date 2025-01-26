import { Component, inject } from '@angular/core';

// DEPENDENCIAS NECESARIAS
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

// DEPARTAMENTOS
import { Departamentos } from '../../interfaces/departamentos';
import { DepartamentosService } from '../../services/departamentos.service';

// METODO 
import { NgFor } from '@angular/common';

// FORMULARIO
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-departamentos',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor, FormsModule],
  templateUrl: './form-departamentos.component.html',
  styleUrl: './form-departamentos.component.css'
})
export class FormDepartamentosComponent {
  // 1. INJECT de las dependencias a usar
  _departamentos = inject(DepartamentosService)

  // 2. Declaracion de variables
  allDepartamentos: Departamentos[] = [];

  // VARIABLES PARA LAS PETICIONES
  Nombre: string = "";
  CodigoDepartamento: number = 0;
  editMode: boolean = false;
  editDepartamentoId: string | undefined | null = null;

  // PETICION POST
  crearDepartamento() {
    if (this.Nombre === '' || this.CodigoDepartamento === 0) {
      alert('Ingrese todos los campos');
    } else {
      const nuevoDepartamento: Departamentos = {
        Nombre: this.Nombre,
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
  identificarId(id: string | undefined) {
    this.editDepartamentoId = id;
    this.editMode = true;
    console.log(this.editDepartamentoId);
  }

  // PETICION PUT
  modificarDepartamento() {
    console.log('Entré'); //Puede eliminarse
    console.log(this.editDepartamentoId, this.Nombre, this.CodigoDepartamento);

    if (!this.Nombre || this.CodigoDepartamento <= 0) {
      alert('Ingrese todos los campos');
    } else if (this.editDepartamentoId) {
      const departamentoActualizado: Departamentos = {
        Nombre: this.Nombre,
        CodigoDepartamento: this.CodigoDepartamento
      };

      this._departamentos.putDepartamento(departamentoActualizado, this.editDepartamentoId).subscribe({
        next: (res: any) => {
          if (res) {
            console.log('res', res);
            alert('Empleado actualizado satisfactoriamente');
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
  };
}
