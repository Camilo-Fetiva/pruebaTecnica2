# Solución Prueba Técnica #2

---

## Objetivo del Repositorio  
- Proporcionar una guía práctica para implementar y revisar la prueba técnica aplicada al caso de registro adecuado de empleados y departamentos.  
- Facilitar el uso de del codígo para realizar la revisión de ala prueba.  

## Técnologias Utilizadas
- HTML
- CSS
- MongoDB
- Express
- NodeJS
- Angular

---

## Prueba Técnica  


## Cómo Utilizar Este Repositorio  
### Requisitos Previos  
- Node.js v18+  
- MongoDB en ejecución (local o en la nube).  
- Angular CLI para trabajar con el frontend (opcional).  

### Paso a Paso BACKEND
1. Crear la carpeta Backend:  
    - npm init

2. Instala las dependencias necesarias: 
    - nodemon
    - express
    - dotenv

3. Configura el archivo *Package.json*:
    - 'type':'module' -> poder usar el import
    - 'main' : 'app.js' -> archivo principal
    - Borrar el 'test'
    - Agregar 'start': 'node app.js'
    - Agregar 'dev': 'nodemon app.js'

4. Conectar a la base de datos:
    - Crear .gitignore (para ignorar node_modules)
    - Crear .env (escribir las variables de entorno)
    - Crear app.js (configurar servidor y variables de entorno)

5. Crear la carpeta SRC (Contiene el codigo fuente):
    - carpeta CONFIG -> configuración conexión con la base de datos
    - carpeta MODELS -> para los modelos de datos
    - carpeta CONTROLLERS -> para los controladores de cada modelos de datos
    - carpeta ROUTES -> para las rutas de conexión


6. Importar las ruta:
    - En el archivo APP.JS
    - Configurar el uso de las rutas

### Paso a Paso FRONTEND
1. Crear la carpeta frontend:  
    - ng new
    - Seleccionar la versión CSS

2. Crear la carpeta SRC (Contiene el codigo fuente):
    - carpeta GUARDS -> configuración las funciones de proteción de las rutas
    - carpeta INTERCEPTORS -> para las verificaciones
    - carpeta INTERFACES -> para generar los tipos de modelos de datos según el backend
    - carpeta PAGES -> donde contiene los archivos html de cada nodo de la app
    - carpeta SERVICES -> para las peticiones CRUD de los modelos de datos

3. Crear los componentes:
    - ng generate component carpeta/componente

4. Crear los rutas:
    - Importar los componentes según la ruta necesaria
    - Crear rutas para cada componente

5. Configurar las rutas (APP.ROUTES.TS):
    - Crear rutas para cada componente y pagína

6. Crear las interfases:
    - ng g i carpeta/nombre
    - Estructura de la información de los modelos de datos del backend

7. Crear los servicios:
    - ng g s carpeta/nombre
    - Por cada servicio y controlador del backend se crea un servicio en el frontend
    - Gestionar peticiones CRUD necesarias según el archivo y el modelo de datos

8. Configuración de importaciones, dependencias y rutas (APP.CONFIG.TS):
    - Importar dependencias necesarias para el funcionamiento de la app
    - Configurar su uso en funciones

9. Conexión con el BACKEND:
    - npm i cors (INSTALAR CORS)
    - import cors from 'cors'; // Dependencia para la conexion con el frontend
    - app.use(cors()); // <- Uso para utilizar el backend en el navegador

10. Configuración de funciones en los archivos TS correspondientes:
    - Generar la logica de las peticiones CRUD en el archivo TS de cada componente creado para implementar su funcionalidadad

---

## Autoría  
Este proyecto fue desarrollado como ejercicio de prueba técnica para el Bootcamp de Desarrollo Web de BIT.  

- **Autor:** Camilo Fetiva
- **GitHub:** [Camilo-Fetiva](https://github.com/Camilo-Fetiva)  
- **LinkedIn:** [Perfil de linkedIn](https://www.linkedin.com/in/camilo-fetiva-web-designer/) 

¡Explora los ejemplos y adapta las soluciones a tus propios proyectos!
