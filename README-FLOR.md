`README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
# Cifrado César

## Índice

* [1. Objetivo](#1-Objetivo)
* [2. Instalacion](#2-Instalación)

***


## 2.-Instalación

Para poder acceder de manera local a esta solucion es necesario seguir los siguientes pasos
1.-Descargar o clonar repositorio
2.-Descargar un IDE de desarrollo de su preferencia.
3.-Desde el IDE abrir carpeta de la solucion.
4.-Una ves abierta abrir la consola y correr npm install
5.-Una ves finalizada la instalacion de node, ingresar comando npm start
6.-Por ultimo ir a la direccion de servidor local.
7.-Podra ver el proyecto, recuerde que con la logica actual solo puede cifrar/descifrar mayusculas, minusculas y caracteres especiales, para ser mas especificos del caractes 32 al 122 del codigo ascii.


## 2.-Introduccion

 
La solucion presentada está pensada como una herramienta enfocada ayudar a guardabosques quienes tienen como una de sus tareas el monitoreo biológico de las especies que habitan en un área asignada.
 
Mi sugerencia es proporcionarles un encriptador web, en el cual puedan realizar sus informes, escribir mensajes para colegas o investigadores, etc. De esta manera podrán cifrar información delicada, tal como ubicación de animales, número de ejemplares, entre otro tipo de información importante que pudiera ser interceptada por cazadores furtivos y/o traficantes de animales.
 
Con esta idea no pretendo solucionar el problema pero considero que puede ser una herramienta valiosa contra la extracción y extinción de la fauna y flora.

debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.

### 3.-Funcionalidad

Mi solucion esta compuesta por 1 contenedor en el cual coloque los campos que se requiere que el usuario ingrese tales como, offset y el texto a cifrar/descifrar, en la parte inferior se enontraran 3 controles los cuales te permitiran cifrar / limpiar campo/ Descifrar, por ahora no tiene validaciones que controlen el querer cifrar/descifrar  un campo vacio, por lo que es posble hacer eso.

el funcionamiento esperado por parte del usuario es el siguiente
1.-Ingresar un nivel de cifrado, por defecto estara el 3.
2.-Ingresar el texto para cifrar/descifrar.-
3.-Una ves ingresado el texto, dar clic en el boton Cifrar.
4.-Al dar clic abrira un modal con el texto cifrado dentro, el usuario podra copiar el texto dando clic en boton copiar.
5.-


