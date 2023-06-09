
var frase = prompt('Introduzca Una Frase ');
frase = frase.toLowerCase().replace(/\s/g,"");
var reves = frase.split("").reverse().join("");
var primeraLetra=frase.charAt(0);

let posicionMedia = Math.floor(frase.length / 2);
let letterInMiddle = frase.charAt(posicionMedia);

console.log(" La Palabra Ingresada es "+ frase+"<br>");
console.log(" La Primera Letra de la Cadena es " +primeraLetra+"<br>");
console.log(" La Letra De Inmedio es " + letterInMiddle);



function palindromo (frase) {
if(frase == reves){
  alert('Es un palindromo');
}
else{ 
alert('NO es un palindromo');
}
}
palindromo (frase);