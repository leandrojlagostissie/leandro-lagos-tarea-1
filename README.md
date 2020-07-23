# leandro-lagos-tarea-1

Tarea1:
- Crea una base de datos de Mysql que contenga una tabla con cualquier cantidad de campos y registros, y crea una api con node y express que se conecte a la base de datos y obtenga todos los registros de la tabla que creaste previamente.
- Sube el proyecto a Git
- Crea un README con la explicación del funcionamiento de tu API


# AMBIENTE
* Node v10.x
* MySql v10.4.11


Los pasos siguiente se hacen ubicandose en ./App


# INSTALACION

Instalar dependencias, comando: 

> npm i 


# POBLAR DATA


Comprobar los parametros de cofiguracion para la bdd en ./config/config.json
* En localhost(127.0.0.1)
* Motor MySql v10.4.11
* Crear bdd con nombre "leandro-lagos-tarea-1"
* usuario por defecto "root" sin pass


Una vez instaladas las dependecias, poblar la base corriendo la migracion y poblado correspondiente
(Se utilizo el motor ORM de sequelize):

> npx sequelize-cli db:migrate

y despues:

> npx sequelize-cli db:seed:all


# EJECUTAR

correr la api con el siguiente comando

> npm run start

# TESTEAR

ejecutar el siguiente endpoint para comprobar la data:

* localhost:3000/users

deberá devolver la siguiente data:

{
    "users": [
        {
            "id": 3,
            "userName": "leandro-lagos-tissie",
            "email": "leandrolagos93@gmail.com",
            "createdAt": "2020-07-22T23:27:50.000Z",
            "updatedAt": "2020-07-22T23:27:50.000Z"
        },
        {
            "id": 4,
            "userName": "aaaaaaaaaaaaaaa",
            "email": "aaaaaaaaaaaaaaa@gmail.com",
            "createdAt": "2020-07-22T23:27:50.000Z",
            "updatedAt": "2020-07-22T23:27:50.000Z"
        },
        {
            "id": 5,
            "userName": "bbbbbbbbbb",
            "email": "bbbbbbbbbb@gmail.com",
            "createdAt": "2020-07-22T23:27:50.000Z",
            "updatedAt": "2020-07-22T23:27:50.000Z"
        }
    ]
}





# ASOCIACION CON TAREA 2

Se habilita un endpoint en 

* localhost:3000/graphql/users

El endpoint utiliza GraphQL para la manipulación de usuarios desde el frontend (https://github.com/leandrojlagostissie/leandro-lagos-tarea-2).
Se agregan validaciones varias