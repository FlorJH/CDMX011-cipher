/*src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.*/

import cipher, { encode } from './cipher.js';

//Datos 
cipher.offset= Number(document.getElementById('desplazar').value),
cipher.palabra=document.getElementById('texto').value




//eventos de botones
let btnCifrar=document.getElementById('cifrar');
btnCifrar.addEventListener('click', function(){encode(cipher)});

