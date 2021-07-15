const cipher = {
  offset: 0,
  string: '',


  encode: function (offset, string) {
    //console.log(cipher.string);
    const stringCifrada = [];
    let nuevaPosicion = 0;

    for (let i = 0; i <= string.length - 1; i++) { 

      if ((string[i].charCodeAt() + offset) > 122) {

        nuevaPosicion = (string[i].charCodeAt() + offset) % 91;
        stringCifrada.push(String.fromCharCode(nuevaPosicion));

      }
      else {
        nuevaPosicion = (string[i].charCodeAt() + offset);
        stringCifrada.push(String.fromCharCode(nuevaPosicion));
      }

    }

    return (stringCifrada.join(''));
  },




  decode: function (offset, string) {
    const mensajeDescifrado = [];
    let realPosicion;

    for (let j = 0; j <= string.length - 1; j++) {
      //console.log(cipher.string[j]);

      if (string[j].charCodeAt() - offset < 32) {
        realPosicion = (string[j].charCodeAt() + 91) - offset;
        mensajeDescifrado.push(String.fromCharCode(realPosicion));
      }
      if (string[j].charCodeAt() - offset <= 122 && (string[j].charCodeAt() - offset) >= 32) {

        realPosicion = string[j].charCodeAt() - offset;
        mensajeDescifrado.push(String.fromCharCode(realPosicion));
      }


    }

    //document.getElementById('resultadoDescifrado').innerHTML = `${mensajeDescifrado.join('')}`;
    return (mensajeDescifrado.join(''));

  }


};

export default cipher;
