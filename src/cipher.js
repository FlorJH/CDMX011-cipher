//import { CLIEngine } from "eslint";



let cipher = {
  offset:3,//darle la referencia a campo number
  palabra:'CASA' //darle la referencia del text area
};

//encode(cipher);

export function encode(cipher){

let abcdario=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V',];
let palabraCifrada=[];
let nuevaPosicion;

for(let i=0; i<= cipher.palabra.length-1; i++){
  //console.log(cipher.palabra[i]);
  for (let j=0; j <=abcdario.length-1 ; j++) {
    
      if ( cipher.palabra[i]== abcdario[j]) {
        nuevaPosicion= j +cipher.offset; 
        palabraCifrada.push(abcdario[nuevaPosicion]) ;
        
       

       /* if(j >= abcdario.length )
        {
j=(abcdario.length-j)+-1;
        }*/
      }
  }
}
console.log(palabraCifrada);
// return palabraCifrada;

}




export default cipher;
