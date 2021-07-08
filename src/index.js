/*src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.*/

import cipher, { decode, encode } from './cipher.js';






//eventos de botones
let btnCifrar = document.getElementById('cifrar');
btnCifrar.addEventListener('click', function () {
  //Datos 
  cipher.offset = Number(document.getElementById('desplazar').value);
  cipher.palabra = document.getElementById('texto').value;
  encode(cipher)
});


let btnDescifrar = document.getElementById('descifrar');

btnDescifrar.addEventListener('click', function () {
  //Datos 
  cipher.offset = Number(document.getElementById('desplazar').value);
  cipher.palabra = document.getElementById('texto').value;
  decode(cipher)
});







