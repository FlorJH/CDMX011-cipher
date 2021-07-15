import cipher from './cipher.js';


//eventos de botones
const btnCifrar = document.getElementById('cifrar');
btnCifrar.addEventListener('click', function () {
  //Datos 
  cipher.offset = Number(document.getElementById('desplazar').value);
  cipher.string = document.getElementById('texto').value;
  document.getElementById('resultado').innerHTML= cipher.encode(cipher.offset, cipher.string);
  
  //modal
  document.getElementsByClassName("fondoTransparente")[0].style.display="block";
});


const btnDescifrar = document.getElementById('descifrar');
btnDescifrar.addEventListener('click', function () {
  //Datos 
  cipher.offset = Number(document.getElementById('desplazar').value);
  cipher.string = document.getElementById('texto').value;
  document.getElementById('resultadoDescifrado').innerHTML = cipher.decode(cipher.offset, cipher.string);
  //modal
  document.getElementsByClassName("fondoTransparente")[1].style.display="block";
});


//btn limpiar
const btnLimpiar = document.getElementById('limpiar');
btnLimpiar.addEventListener('click', function () {
  document.getElementById('texto').value="";
});

//Btn cerrar de modal
document.getElementsByClassName("modal_cerrar")[0].addEventListener('click', function()
{document.getElementsByClassName("fondoTransparente")[0].style.display="none"});

document.getElementsByClassName("modal_cerrar")[1].addEventListener('click', function()
{document.getElementsByClassName("fondoTransparente")[1].style.display="none"});

//btn copiar
const btnCopiar = document.getElementById('copiarResultado');
btnCopiar.addEventListener('click',function(){
  const copiar= document.getElementById('resultado');
  copiar.select();
  document.execCommand('copy');
});

const btnCopiarDescifrado = document.getElementById('copiarDescifrado');
btnCopiarDescifrado.addEventListener('click',function(){
  const copia= document.getElementById('resultadoDescifrado');
  copia.select();
  document.execCommand('copy');
});

