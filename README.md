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
- El validator pipe actua en conjunto con paquetes de tercero para exponer mas decoradores como el `class validator y class transformer`
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

-------------------------------------
## Seccion 7 MongoDB Pokedex
Esta sección enteramente se enfoca en la grabación a base de datos, pero puntualmente:

- Validaciones
- CRUD contra base de datos
- Docker y Docker Compose
- Conectar contenedor con filesystem (para mantener la data de la base de datos)
- Schemas
- Modelos
- DTOs y sus extensiones
- Respaldar a Github


### Notas:
- comando `npm i @nestjs/serve-static` para hacer funcionar el frontend en la carpeta public (ver el nest-cheatsheet.pdf para mas info)
- En el main   `app.setGlobalPrefix('api/v2');` // esto es para agregar el root de la aplicacion
- Se hace un custom pipes para eliminar, se desea asegurar que el param sea un id correcto
- Los pipes tambien retornan data transformada


-------------------------------------
## Seccion 8 Seed y Paginación
Esta sección tiene por objetivo aprender:

- Uso de modelos en diferentes módulos
- SEED para llenar la base de datos
- Paginación de resultados
- DTOs para Query parameters
- Transformaciones de DTOs

También les mostraré varias formas de hacer 
inserciones por lote y varias formas de lograrlo.


### Notas:
- Es bueno usar el CLI para crear los archivos y borrar o modificar lo que no se necesita
- El controlador solo debe enfocarse en lo que debe hacer y nada mas
- Comando `git checkout -- .` para volver al commit anterior
- providers para gestionar los paquetes de terceros para que cuando toque hacer alguna refactorizacion, se haga sin problemas
- Los providers se crean dentro de la carpeta common
- los providers deben tener el decorador `@Injectable()` para inyectarlo en un servicio, pero primero deben pasar por el common module
- En el main colocar:
```
transformOptions: {
    enableImplicitConversion: true, // si en un param se envia "2" se interpreta como 2
}
```

### Nota de actualización - Axios
En la siguiente clase, instalamos el paquete axios para realizar las peticiones HTTP.

En la última versión del mismo, está dando inconvenientes con NestJS (cannot read properties of undefined).

Pueden ver la issue sin resolver a día de hoy: https://github.com/axios/axios/issues/5100.

Por lo que a la hora de instalar axios, recomendamos instalen la versión 0.27.2 hasta que liberen una versión superior con el inconveniente solventado.

Pueden usar el comando `yarn add axios@0.27.2` o `npm install axios@0.27.2`.

-------------------------------------
## Seccion 9 Variables de entorno - Deployment y Dockerizar la aplicación
En esta sección trabajaremos en la configuración de variables de entorno y su validación:
Puntualmente veremos:

- Dockerizacion
- Mongo Atlas
- Env file
- joi
- Validation Schemas
- Configuration Module
- Recomendaciones para un Readme útil
- Despliegues
- Dockerfile


### Notas:
- Variables de entorno: .env files Crear en el root del proyecto el archivo .env `npm i @nestjs/config`
- Todo lo que salga de los env sale como strings
- Manipular la data de los env en una funcion exportada de `src\config\env.config.ts`
- Muchas veces no es necesario, pero puede ser necesario un servicio de configuracion para validar los env


### Dockerizar la aplicación:
1. Configurar `Dockerfile`
2. Configurar `.dockerignore`
3. Configurar `docker-compose.prod.yaml`
4. Crear el archivo ```.env.prod```
5. Llenar las variables de entorno de prod
6. Crear la nueva imagen por primera vez:
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
7. Correr la imagen despues de la segunda vez:
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

-------------------------------------
## seccion 10 TypeORM - Postgres
En esta sección estaremos trabajando con:

- TypeORM
- Postgres
- CRUD
- Constrains
- Validaciones
- Búsquedas
- Paginaciones
- DTOs
- Entities
- Decoradores de TypeORM para entidades
- Métodos BeforeInsert, BeforeUpdate

Es una sección importante porque a partir de aquí, empezaremos a construir sobre ella relaciones, autenticación, autorización y websockets.


### Notas:
- Desisntalar cosas de prettier para que no moleste: `yarn remove prettier eslint-config-prettier eslint-plugin-prettier`
- Se usa TypeORM para conectar nest con la bd
- BeforeInsert y BeforeUpdate en la entidad para hacer algo antes de, puede validar cosas, llenar un campo por defecto, etc
- Al parecer TypeORM nos protege de inyecciones sql

-------------------------------------
## Seccion 11 Relaciones en TypeORM
Esta sección está cargada de contenido nuevo que les puede servir mucho, especialmente si trabajan con bases de datos relacionales.

- Temas que veremos:
- Relaciones
    - De uno a muchos
    - Muchos a uno
- Query Runner
- Query Builder
- Transacciones
- Commits y Rollbacks
- Renombrar tablas
- Creación de un SEED
- Aplanar resultados

La idea es hacer que nuestro endpoint de creación y actualización de producto permita la actualización de una tabla secundaria de la misma forma como lo hemos creado en la sección pasada.


### Notas:
- Para acutalizar queryRunner Sirve para asegurar el guardado correcto de la data, si algo sale mal, entonces tambien afeta a las relaciones en este caso a las imagenes de los productos
- El texto plano se refiera a la data que se envia y que sé que va a retornar, entonces en lugar de hacer la consulta se reutiliza la data que se envia
- para eliminar un producto y como tiene relacion con imagenes, entonces se debe configurar que se elimine en cascada en la entidad

-------------------------------------
## Seccion 12 Carga de archivos
Esta sección es bien interesante porque trabajaremos con la carga de archivos a nuestro backend. 
Idealmente recuerden, que no es recomendado colocar archivos físicamente en nuestro backend, 
lo que se recomienda es subirlos y colocarlos en un hosting o servicio diferente.

Pero el conocimiento de tomar y ubicar el archivo en otro lugar de nuestro file system es bastante útil.

Aquí veremos validaciones y control de carga de cualquier archivo hacia nuestro backend.


### Notas:
- No se recomienda alojar archivos en el mismo lugar de todo el backend, pero para efectos demostrativos se hace en este proyecto
- Los nombres de los archivos es mejor guardarlos sin la url inicial, queda mucha data repetida en la bd, es mejor concatenar la url en el backend

-------------------------------------
## Seccion 13 Autenticación de autorización
Esta es una de las secciones más grandes del curso y está cargada de muchos conceptos nuevos, 
mi recomendación es que traten de digerirla en dos jornadas de estudio en lugar de intentar 
verla completamente en una sola corrida.

Puntualmente veremos:

- Autenticación
- Autorización
- Json Web Tokens
- Hash de contraseñas
- Nest Passport
- Módulos asíncronos
- Protección de rutas
- Custom Method Decorators
- Custom Class Decorators
- Custom Property Decorators
- Enlazar usuarios con productos
- Bearer Tokens

Y mucho más

Hay varias tareas dentro de esta sección que esperaría que intenten llevar con calma, 
todo lo que esta sección contiene puede ser abrumador.


### Notas:
- import * as bcrypt from 'bcrypt'; // forma ligera de hacer el patron adaptador, aunque tambien puede ser aparte
- Liberias de nest ---> passport para ayudar en la autenticacion
- jwt se configuran en carpeta strategy, que indica si el token es valido o no
- Cuando se necesite, los jwt se envian como un header de auth, como un bearer token es una de las formas de hacerlo
- Guards para permitir o prevenir acceso a una ruta, se usa en el controlador
- Decorator composition es basarse en un decorador para crear otro decorador, para evitar crear varios decoradores en uno solo

-------------------------------------
## Seccion 14 Documentación - OpenAPI
El objetivo de esta sección es trabajar con la documentación semi-automática que nos ofrece Nest para seguir  la especificación de OpenAPI

Puntualmente veremos:
- Postman documentation
- Nest Swagger


### Notas:
- Esta seccion consiste en la documentacion del backend en swagger a traves de openapi de nest
- Postman ofrece algo muy similar al swagger para documentar pero no es tan completo como swagger
- openapi es agnostico, no depende de un lenguaje, pero nest tiene un instalador especializado y una documentacion especifica


-------------------------------------
## Seccion 15 Websockets
Esta sección tiene información sobre la comunicación entre cliente y servidor mediante WebSockets, puntualmente veremos:

- Nest Gateways
- Conexiones
- Desconexiones
- Emitir y escuchar mensajes desde el servidor y cliente
- Cliente con Vite y TS
- Autenticar conexión mediante JWTs
- Usar mismo mecanismos de autenticación previamente creado
- Desconectar sockets manualmente
- Prevenir doble conexión de usuarios autenticados.

### Notas:
- cuando el front y el back estan en el mismo servidor, no hay necesidad de configurar el cors
- El gateway funciona como un controlador en nest para los ws, de resto lo demas es igual a un rest tradicional
- El cliente y el servidor se comunican sin que el cliente tenga que activar la peticion
- Se puede crear un CRUD para um ws, los endpoints se llaman de forma diferente, no es usual hacer un CRUD con ws
- Se trabaja en un frontend separado para visualizar los ws
- Para conectar el front con el ws solo se necesita la url del ws en el front, como si fuera un listener

-------------------------------------
## Seccion 16 Desplegar toda la aplicación a producción
Esta sección trabajaremos en desplegar todo el backend y frontend, pero puntualmente aprenderemos:

- Heroku CLI
- Logs y Tails de logs
- Manejo de errores en producción
- Configuración de variables de entorno
- Postgres en la nube
- Despliegue en Netlify
- Pruebas de aplicación
- CORS
- Generar build de producción VITE


-------------------------------------
