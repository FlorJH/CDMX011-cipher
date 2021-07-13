import cipher, { decode, encode } from './cipher.js';


//eventos de botones
let btnCifrar = document.getElementById('cifrar');
btnCifrar.addEventListener('click', function () {
  //Datos 
  cipher.offset = Number(document.getElementById('desplazar').value);
  cipher.string = document.getElementById('texto').value;
  encode(cipher);
  //modal
  document.getElementsByClassName("fondoTransparente")[0].style.display="block";
});


let btnDescifrar = document.getElementById('descifrar');
btnDescifrar.addEventListener('click', function () {
  //Datos 
  cipher.offset = Number(document.getElementById('desplazar').value);
  cipher.string = document.getElementById('texto').value;
  decode(cipher)
  //modal
  document.getElementsByClassName("fondoTransparente")[1].style.display="block";
});


//btn limpiar
let btnLimpiar = document.getElementById('limpiar');
btnLimpiar.addEventListener('click', function () {
  document.getElementById('texto').value="";
});

//Btn cerrar de modal
document.getElementsByClassName("modal_cerrar")[0].addEventListener('click', function()
{document.getElementsByClassName("fondoTransparente")[0].style.display="none"});

document.getElementsByClassName("modal_cerrar")[1].addEventListener('click', function()
{document.getElementsByClassName("fondoTransparente")[1].style.display="none"});

//btn copiar
let btnCopiar = document.getElementById('copiarResultado');
btnCopiar.addEventListener('click',function(){
  let copiar= document.getElementById('resultado');
  copiar.select();
  document.execCommand('copy');
});
let btnCopiarDescifrado = document.getElementById('copiarDescifrado');
btnCopiarDescifrado.addEventListener('click',function(){
  let copia= document.getElementById('resultadoDescifrado');
  copia.select();
  document.execCommand('copy');
});

