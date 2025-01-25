import { Component } from '@angular/core';

// DEPENDENCIAS NECESARIAS
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

// DEPARTAMENTOS

@Component({
  selector: 'app-form-departamentos',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './form-departamentos.component.html',
  styleUrl: './form-departamentos.component.css'
})
export class FormDepartamentosComponent {

}
