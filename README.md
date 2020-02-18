
<img  align="left" width="150" style="float: left;" src="https://www.upm.es/sfs/Rectorado/Gabinete%20del%20Rector/Logos/UPM/CEI/LOGOTIPO%20leyenda%20color%20JPG%20p.png">
<img  align="right" width="60" style="float: right;" src="http://www.dit.upm.es/figures/logos/ditupm-big.gif">

<br/><br/><br/>

# Entrega5_BBDD

Versión: 18 de Febrero de 2020

## Objetivos
 * Afianzar los conocimientos obtenidos sobre el desarrollo de programas interactivos con Node.js
 * Afianzar los conocimientos obtenidos sobre el diseño de bases de datos relacionales y su implementación utilizando SQLite y Sequelize.

## Descripción de la práctica

Esta práctica consiste en la ampliación del proyecto de gestión de usuarios y quizes desarrollado en clase. Se añadirá la posibilidad de jugar a responder las preguntas almacenadas en el servicio de manera aleatoria y consecutiva hasta fallar alguna de ellas. Se implementará también una nueva funcionalidad para almacenar las puntuaciones conseguidas por cada usuario (número de aciertos) y para poder consultarlas en cualquier momento. 


## Descargar el código del proyecto

El proyecto debe clonarse en el ordenador desde el que se está trabajando:

```
$ git clone https://github.com/CORE-2020/Entrega5_BBDD
```
A continuación se debe acceder al directorio de trabajo, instalar las dependencias y configurar la base de datos (migraciones y seeders). Entonces puede arrancarse el programa.

```
$ cd Entrega5_BBDD
$
$ npm install
$
$ npm run migrate
$
$ npm run seed
$
$ npm start     ##  or 'node main'

```

## Tareas

El alumno debe implementar las siguientes nuevas funcionalidades sobre el proyecto proporcionado:

### Funcionalidad play

Debe incluirse el nuevo comando ``p`` (play) que comienza una nueva ronda de preguntas. Al ejecutar este comando los quizes almacenados en el sistema van mostrándose de manera aleatoria y consecutiva al usuario que debe tratar de contestarlos.

- Si se contesta correctamente a un quiz y hay más quizes disponibles se muestra el siguiente siguiendo un orden aleatorio.
- Si se contesta correctamente a un quiz y no hay más quizes disponibles se muestra por pantalla la puntuación obtenida (número de aciertos) y se vuelve al menú principal.
- Si se contesta incorrectamente a un quiz se muestra por pantalla la puntuación obtenida (número de aciertos) y se vuelve al menú principal.

### Funcionalidad puntuaciones

Las puntuaciones obtenidas por un usuario registrado deben almacenarse en la base de datos al terminar una ronda de preguntas. Además las puntuaciones de los usuarios deben poder consultarse en cualquier momento usando el nuevo comando ``ls`` (list score). Para ello deben realizarse los siguientes pasos: 

1. Incluir un nuevo modelo ``Score`` así como su relación con la tabla de usuarios. Hay que tener en cuenta que para un mismo usuario se almacenarán varias puntuaciones, una por cada vez que juegue. La tabla ``Score`` almacenará los siguientes atributos:
	- Atributo ``score`` de tipo entero que indica el número de quizes contestados correctamente.
	- Atributo ``date`` de tipo fecha que indica la fecha en la que se consiguió la puntuación.
	- Referencia al identificador de usuario de la tabla User.

2. Implementar una migración de la base de datos para crear la nueva tabla.

3. Ampliar la funcionalidad play para solicitar el nombre de usuario al finalizar el juego y para almacenar la puntuación asociada a dicho usuario en la base de datos. En caso de que el usuario introducido no exista se creará un nuevo usuario con el nombre introducido. 

4. Implementar la funcionalidad del nuevo comando ``ls`` (list score) que pinta una lista de las  ordenadas de mayor a menor con el siguiente formato (para mostrar la fecha se debe utilizar el método ``toUTCString()`` del objeto Date): 


```
Peter|3|Tue, 18 Feb 2020 14:20:27 GMT
Susan|2|Tue, 18 Feb 2020 14:20:27 GMT
Kike|2|Tue, 18 Feb 2020 14:20:27 GMT
Patri|1|Tue, 18 Feb 2020 14:20:27 GMT

```


## Prueba de la práctica 

Para ayudar al desarrollo, se provee una herramienta de autocorrección que prueba las distintas funcionalidades que se piden en el enunciado. Para utilizar esta herramienta debes tener node.js (y npm) ([https://nodejs.org/es/](https://nodejs.org/es/)) y Git instalados. 

Para instalar y hacer uso de la [herramienta de autocorrección](https://www.npmjs.com/package/autocorector) en el ordenador local, ejecuta los siguientes comandos en el directorio del proyecto:

```
$ npm install -g autocorector     ## Instala el programa de test
$ autocorector                    ## Pasa los tests al fichero a entregar
............................      ## en el directorio de trabajo
... (resultado de los tests)
```
También se puede instalar como paquete local, en el caso de que no se dispongas de permisos en el ordenador desde el que estás trabajando:
```
$ npm install autocorector     ## Instala el programa de test
$ npx autocorector             ## Pasa los tests al fichero a entregar
............................   ## en el directorio de trabajo
... (resultado de los tests)
```

Se puede pasar la herramienta de autocorrección tantas veces como se desee sin ninguna repercusión en la calificación.

## Instrucciones para la Entrega y Evaluación.

Una vez satisfecho con su calificación, el alumno puede subir su entrega a Moodle con el siguiente comando:
```
$ autocorector --upload
```
o, si se ha instalado como paquete local:
```
$ npx autocorector --upload
```

La herramienta de autocorrección preguntará por el correo del alumno y el token de Moodle. En el enlace [https://www.npmjs.com/package/autocorector](https://www.npmjs.com/package/autocorector) se proveen instrucciones para encontrar dicho token.

**RÚBRICA**: Se puntuará el ejercicio a corregir sumando el % indicado a la nota total si la parte indicada es correcta:

-  **25%:** Se ...

Si pasa todos los tests se dar? la m?xima puntuaci?n.