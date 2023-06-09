let num = 1;
let incremento = 1;
let limite = 11;
let array = [];

function sucesionNum(){
while (array.length < limite)
 {
    array.push(num);
    num += incremento;
    incremento++;
  
}
return array;
}
const secuencia = sucesionNum();
console.log(secuencia);
