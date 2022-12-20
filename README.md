Rescia Gonzalo

FINAL MCGA

UAI - Ingeniería En Sistemas


Consigna:
Crear un servidor web usando Node.js, NPM y Express.js respetando la arquitectura API REST. 
Debe contar con una serie de endpoints que contemple las acciones básicas de un CRUD de productos. 
Los datos de los productos afectados deben estar persistidos en un base de datos NoSQL, usando Mongoose como ODM 
y Mongo Atlas como servicio en la nube en donde alojar la base de datos.

El proyecto debe estar ordenado en carpetas y archivos respetando las estructuras dadas en clase:
 
/src
/models
Products.js
             ...
       /controllers
products.js
... /routes
             index.js
             products.js
             ...
index.js ...
package.json
Readme.md


 Crear un esquema de mongoose para los productos el cual tenga las siguientes propiedades. 
 Cada una debe contar con al menos la validación de tipo de dato:

- id
- name
- price
- stock
- description

Crear 6 endpoints respetando los métodos HTTP para manejar el CRUD:
- GET: para hacer ping al servidor y que devuelva 'OK' en caso que el server y la BD estén levantadas
- GET: para conseguir la lista entera de productos
- GET: para conseguir un producto por name O id
- POST: para agregar un producto a la BD
- DELETE: para eliminar un producto
- PUT: para editar algún campo de un producto

El proyecto debe manejar variables de entorno utilizando la librería dotEnv, en donde deben ir los valores sensibles que no deben ser subidos al repositorio, como por ejemplo el string de conexión a la base de datos.
El desarrollo se debe subir a un repositorio de Github en la cuenta del alumno. Debe contar con un readme prolijo y detallado, dando información sobre la aplicación desarrollada, tecnologías usadas, problemática resuelta, etc. Debe contar al menos con 5 commits, todos realizados por el dueño del repositorio (alumno).
La cuenta de MongoAtlas utilizada para la base de datos debe ser del alumno. Es necesario tener acceso a la base de datos para visualizarla al momento de exponer el parcial.
El desarrollo debe ser INDIVIDUAL, cualquier indicio que ponga en duda la autenticidad del código desarrollado por el alumno, será motivo necesario para desaprobar el parcial.
El parcial se debe entregar antes del lunes 03 de Octubre a las 23:59 horas. Se debe responder a la actividad en UAI Ultra con la URL del repositorio.