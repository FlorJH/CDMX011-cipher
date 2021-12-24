# Cifrado César
 
## Índice
 
* [1. Contexto](#1-Contexto)
* [2. Instalación](#2-Instalación)
* [3. Funcionalidad](#3-Funcionalidad)
 
***
 
## 1.-Contexto
 
 
La solución presentada está pensada como una herramienta enfocada a ayudar a guardabosques quienes tienen como una de sus tareas el monitoreo biológico de las especies que habitan en un área asignada.
 
Mi sugerencia es proporcionarles un encriptador web, en el cual puedan realizar sus informes, escribir mensajes para colegas o investigadores, etc. De esta manera podrán cifrar información delicada, tal como ubicación de animales, número de ejemplares, entre otro tipo de información importante que pudiera ser interceptada por cazadores furtivos y/o traficantes de animales.
 
Con esta idea no pretendo solucionar el problema pero considero que puede ser una herramienta valiosa contra la extracción y extinción de la fauna y flora.
 
 
## 2.-Instalación
 
Para poder acceder de manera local a esta solución es necesario seguir los siguientes pasos
1.-Descargar o clonar repositorio
2.-Descargar un IDE de desarrollo de su preferencia.
3.-Desde el IDE abrir carpeta de la solución.
4.-Una vez abierta abrir la consola y correr npm install
5.-Una vez finalizada la instalación de node, ingresar comando npm start
6.-Por último ir a la dirección de servidor local.
7.-Podrá ver el proyecto, recuerde que con la lógica actual solo puede cifrar/descifrar mayúsculas, minúsculas y caracteres especiales, para ser más específicos del carácter 32 a 122 del código ascii.
 
 
### 3.-Funcionalidad
 
Mi solución está compuesta por un contenedor en el cual coloque los campos que se requiere que el usuario ingrese tales como, offset y el texto a cifrar/descifrar.
![Image text](https://github.com/FlorJH/CDMX011-cipher/blob/master/src/assets/principal.png?raw=true)
 en la parte inferior se encontrarán 3 controles los cuales te permitiran cifrar / limpiar campo / Descifrar, por ahora no tiene validaciones que controlen el querer cifrar/descifrar  un campo vacío, por lo que es posible hacer eso.
 
El funcionamiento esperado por parte del usuario es el siguiente
1.-Ingresar un nivel de cifrado, por defecto estará el 3.
2.-Ingresar el texto para cifrar/descifrar.
![Image text](https://github.com/FlorJH/CDMX011-cipher/blob/master/src/assets/cifrar.png?raw=true)

3.-Una vez ingresado el texto, dar clic en el botón Cifrar.
4.-Al dar clic abrirá un modal con el texto cifrado dentro, el usuario podrá copiar el texto dando clic en botón copiar.
![Image text](https://github.com/FlorJH/CDMX011-cipher/blob/master/src/assets/cifrado.png?raw=true)

5.-Para descifrar requiere ingresar el texto en el textbox y el nivel de desplazamiento, si el nivel de desplazamiento no es el correcto el mensaje descifrado no será correcto.
![Image text](https://github.com/FlorJH/CDMX011-cipher/blob/master/src/assets/des.png?raw=true)

6.-Por ultimo se requiere dar clic en el btn de "Descifrar"
![Image text](https://github.com/FlorJH/CDMX011-cipher/blob/master/src/assets/descifrar.png?raw=true)

