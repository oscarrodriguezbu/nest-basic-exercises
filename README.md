# Notas de Nest


- Todos los ejercicios de Nest del curso son expandibles y son fuertas para practicar
- Se usa prisma para bd sql y mongoose para mongoose
- Usar node v +18
-  Nest se basa en principios solid
- Se usa tableplus para postgres y mogo compass para mongo
-  Descargar imagen de Mongo 5.0.0 y postgres 14
    `docker pull mongo:5.0.0`
    `docker pull postgres:14.3`
- 


-------------------------------------
## Seccion 2 Breve introducción a TypeScript y conocimientos generales necesarios
Esta sección tiene por objetivo dar unas bases sobre TypeScript con la idea de que se 
familiaricen con los conceptos comunes usados en el día a día con Nest.

Aquí veremos:

- Tipos básicos
- Interfaces
- Implementaciones
- Clases
- Patrón adaptador
- Principio de sustitución de Liskov
- Inyección de dependencias
- Getters
- Métodos asíncronos
- Decoradores de clases y métodos

Es importante recalcar que esto no es una introducción a TypeScript, son conceptos que 
necesito exponer porque los usaremos en el curso de Nest.

### Notas:
- La interfaz solo sirve para crear reglas y condiciones, las clases permiten crear instancias
- Es mas poderosa la clase
- Los adapadores son para manejar librerias de terceros, funciona como un puente
- Principio solid esta relacionado a programacion orientada a objetos
- Principio de sustitución de Liskov consiste en que la clase no dependa de una dependencia, debe ser flexible con los posibles cambios
- Decoradores son simples funciones, pero ahorran tiempo y son reutilizables
- El decorador tiene acceso a la clase y puede hacer de todo con ella
- Nest es muy parecido a Angular, todo se basa en clases

Mas info:
https://docs.nestjs.com/providers

-------------------------------------
## Seccion 3 Primeros pasos en Nest
Estamos entrando a nuestra primera sección sobre Nest, aquí veremos:

- ¿Qué es Nest?
- ¿Por qué usarlo?
- Explicación sobre cada archivo en un proyecto nuevo de Nest
- Core Nest building blocks
    - Módulos
    - Controladores (Post, Patch, Get, Delete)
    - Primeros decoradores
    - Servicios
    - Inyección de dependencias
    - Pipes
    - Exception Filters

Adicionalmente estaremos creando un Rest Api inicial para ir explicando cada concepto paso a paso.


### Notas:
- Nest es una manera muy facil de trabajar con Node, facilita la estructura y herramientas necesarias para trabajar
- Usar el CLI para hacer cualquier cosa, como crear controladores, pipes, etc

Archivos y directorios de Nest:
- Linter se refiere a ciertas practicas recomendadas, nest sugiere su propio Linter
- Dist es donde se compila la app en desarrollo
- Prettier asegura que el codigo se vea bien y tenga buenas practicas, puede llegar a ser muy molesto y toca desinstalarlo
- Arrancar proyecto npm run start:dev el cual le pone el watch para el desarrollo mas rapido
- El main es el punto de entrada de la aplicación
- Module es el corazon que agrupa lo que se necesita, es como el de angular, tiene importaciones, exportaciones, etc
    el modulo tiene un decorador de una clase
- Controller son los que controlan las rutas de la aplicación, escucha la peticion y emite una respuesta
- Las rutas se crean solas y llevan el nombre de la carpeta en src
- Hay decoradores para obtener los request de la peticion
- Servicios se encarga de hacer algo con lo que recibe el controladores, se encarga de la logica del negocio
- Todos los servicios son providers pero no todos los providers son servicios
- Pipes se implmentan en el controlador, sirve para transformar la data recibida
- En el servicio, Nest provee Exception Filters para controlar y manejar los mensajes de de error

-------------------------------------
## Seccion 4 DTOs y Validación de información
Esta sección terminaremos el POST, PATCH y DELETE de nuestro CRUD inicial, pero de forma puntual veremos:

- DTO (Data Transfer Object)
- Patch, Post, Delete
- Validaciones automáticas
- Class Validator
- Class Transformer
- Seguir el principio DRY (Don't repeat yourself)
- Algunos decoradores del Class Validator útiles


### Notas:
- El DTO es una clase para indicar que asi va a lucir algo, tiene reglas de validacion automatica, se pueden instancias
- En Nest se le puede crear decoradores a las propiedades de los DTO para validarlos
- Se aconseja que los DTO sean readonly
- El validator pipe actua en conjunto con paquetes de tercero para exponer mas decoradores como el class validator y class transformer
- En los params, a nivel global del controlador, en los dtos etc se pueden colocar los pipes
- El pipe validar global se coloca en lo mas alto para que este pendiente de todas las peticiones y tambien se le puede agregar 
    ciertas configuraciones segun lo que se requiera

-------------------------------------
## Seccion 5 Nest CLI Resource - Brands CRUD
Esta sección es básicamente un reforzamiento de lo aprendido hasta el momento, 
pero le adicionamos la comunicación entre módulos y servicios.

Puntualmente:

- SEED Endpoint
    - Llenar data de Carros y Marcas
    - Comunicar módulo seed, con los otros módulos de nuestra aplicación
- Errores comunes a la hora de utilizar módulos enlazados
- Problemas con inyección de dependencias de módulos externos
- Brands CRUD completo
- Endpoints
    - DTOs
    - Servicios
    - Controladores

### Notas:
- En esta seccion se simplifica lo visto anteriormente pero con comandos que se encargan de simplificar mucho el trabajo en Nest
- Comando `nest g resource nombreDelRecurso --no-spec` y luego seleccionar cositas 
- La entity es como una interfaz, pero es como una representacion de una tabla o schema en node
- El nombre que se coloque en las entitis al momento de trabajarlos con algun ORM, las tablas de la bd va a tener el nombre de la entity
- 

-------------------------------------
## Seccion 6 Generar build de producción básico

### Notas:
- 

-------------------------------------
## Seccion 7 MongoDB Pokedex


-------------------------------------
## Seccion 8 Seed y Paginación

### Notas:
- 

-------------------------------------
## Seccion 9 Variables de entorno - Deployment y Dockerizar la aplicación

### Notas:
- 

-------------------------------------
## seccion 10 TypeORM - Postgres

### Notas:
- 

-------------------------------------
## Seccion 11 Relaciones en TypeORM

### Notas:
- 

-------------------------------------
## Seccion 12 Carga de archivos

### Notas:
- 

-------------------------------------
## Seccion 13 Autenticación de autorización


### Notas:
- 

-------------------------------------
## Seccion 14 Documentación - OpenAPI


-------------------------------------
## Seccion 15 Websockets


### Notas:
- 

-------------------------------------
## Seccion 16 Desplegar toda la aplicación a producción


### Notas:
- 

-------------------------------------
