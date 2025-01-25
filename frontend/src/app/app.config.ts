import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

//Dependencia para conectar el backend con el frontend
import { provideHttpClient } from '@angular/common/http';

// Gestion de las rutas
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 

    // Proveedor para hacer peticiones al backend y conectarse al backend
    provideHttpClient(),
    
  ]
};
