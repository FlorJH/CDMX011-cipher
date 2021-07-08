
/* * `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.*/


const cipher = {
  offset: 0,//da el valor pero en string
  palabra: '' //darle la referencia del text area
};  

export function encode(cipher) {
  //console.log(cipher.palabra);
  let palabraCifrada = [];
  let nuevaPosicion;

  for (let i = 0; i <= cipher.palabra.length - 1; i++) {

    if ((cipher.palabra[i].charCodeAt() + cipher.offset) > 122) {

      nuevaPosicion = (cipher.palabra[i].charCodeAt() + cipher.offset) % 91;
      palabraCifrada.push(String.fromCharCode(nuevaPosicion));

    }
    else {
      nuevaPosicion = (cipher.palabra[i].charCodeAt() + cipher.offset);
      palabraCifrada.push(String.fromCharCode(nuevaPosicion));
    }

  }
  document.getElementById('temporal').innerHTML = ` ${palabraCifrada.join('')}`;
}





//paso 8.-es menor o igual a 32 ? hacer condición para que reste a partir del 122 

export function decode(cipher){
  let mensajeDescifrado = [];
  let realPosicion;
 
  for (let j = 0; j <= cipher.palabra.length - 1; j++) {
    //console.log(cipher.palabra[j]);
    if(cipher.palabra[j].charCodeAt() -cipher.offset < 32)
    {
      realPosicion=(cipher.palabra[j].charCodeAt() +91) -cipher.offset;
      mensajeDescifrado.push(String.fromCharCode(realPosicion));
    }
    if(cipher.palabra[j].charCodeAt() -cipher.offset <= 122 &&  (cipher.palabra[j].charCodeAt() -cipher.offset) >= 32){

      realPosicion=cipher.palabra[j].charCodeAt() -cipher.offset;
      mensajeDescifrado.push(String.fromCharCode(realPosicion));
    }
     
  }

  //console.log(mensajeDescifrado);
  document.getElementById('temporal').innerHTML = ` ${mensajeDescifrado.join('')}`;
 
}


export default cipher;
