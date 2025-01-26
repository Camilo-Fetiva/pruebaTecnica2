import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

//Dependencia para conectar el backend con el frontend
import { provideHttpClient } from '@angular/common/http';

// Dependencia de proveedor de animaciones
import { provideAnimations } from '@angular/platform-browser/animations';

// Gestion de las rutas
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 

    // Proveedor para hacer peticiones al backend y conectarse al backend
    provideHttpClient(),
    
    // Proveedor para la gestion de animaciones (POSIBLE ERROR DE COMPATIBILIDAD)
    provideAnimations(),
  ]
};
