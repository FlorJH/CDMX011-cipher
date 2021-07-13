const cipher = {
  offset: 0,//da el valor pero en string
  string: '' //darle la referencia del text area
};  

export function encode(cipher) {
  //console.log(cipher.string);
  const stringCifrada = [];
  let nuevaPosicion= 0;

  for (let i = 0; i <= cipher.string.length - 1; i++) {

    if ((cipher.string[i].charCodeAt() + cipher.offset) > 122) {

      nuevaPosicion = (cipher.string[i].charCodeAt() + cipher.offset) % 91;
      stringCifrada.push(String.fromCharCode(nuevaPosicion));

    }
    else {
      nuevaPosicion = (cipher.string[i].charCodeAt() + cipher.offset);
      stringCifrada.push(String.fromCharCode(nuevaPosicion));
    }

  }
  
  
  document.getElementById('resultado').innerHTML = `${stringCifrada.join('')}`;
  //return stringCifrada.join('');
}





export function decode(cipher){
  let mensajeDescifrado = [];
  let realPosicion;
 
  for (let j = 0; j <= cipher.string.length - 1; j++) {
    //console.log(cipher.string[j]);
   
    if(cipher.string[j].charCodeAt() -cipher.offset < 32)
    {
      realPosicion=(cipher.string[j].charCodeAt() +91) -cipher.offset;
      mensajeDescifrado.push(String.fromCharCode(realPosicion));
    }
    if(cipher.string[j].charCodeAt() -cipher.offset <= 122 &&  (cipher.string[j].charCodeAt() -cipher.offset) >= 32){
      
      realPosicion=cipher.string[j].charCodeAt() -cipher.offset;
      mensajeDescifrado.push(String.fromCharCode(realPosicion));
    }
   
     
  }

  //console.log(mensajeDescifrado);
  document.getElementById('resultadoDescifrado').innerHTML = `${mensajeDescifrado.join('')}`;
 // return mensajeDescifrado.join('');
 
}

export default cipher;
