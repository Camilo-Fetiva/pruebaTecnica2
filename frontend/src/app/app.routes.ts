import { Routes } from '@angular/router';

// IMPORTAR LAS RUTAS
import { HomeComponent } from './pages/home/home.component';
import { FormDepartamentosComponent } from './pages/form-departamentos/form-departamentos.component';
import { FormEmpleadosComponent } from './pages/form-empleados/form-empleados.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title:'Home'},
    {path: 'FormularioDepartamentos', component: FormDepartamentosComponent, title:'FormularioDepartamentos'},
    {path: 'FormularioEmpleados', component: FormEmpleadosComponent, title:'FormularioEmpleados'},
];
