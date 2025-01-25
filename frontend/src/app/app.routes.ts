import { Routes } from '@angular/router';

// IMPORTAR LAS RUTAS
import { HomeComponent } from './pages/home/home.component';
import { FormDepartamentosComponent } from './pages/form-departamentos/form-departamentos.component';
import { FormEmpleadosComponent } from './pages/form-empleados/form-empleados.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent, title:'Dashboard'},
    {path: 'FormularioDepartamentos', component: FormDepartamentosComponent, title:'FormularioDepartamentos'},
    {path: 'FormularioEmpleados', component: FormEmpleadosComponent, title:'FormularioEmpleados'},
];
