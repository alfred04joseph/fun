let frutas = [ " piña ", " sandia ", " naranja ", " manzana ", " mandarina "]

let newElement = " mango ";
let posicion = 2;
frutas.splice(posicion, 0, newElement);
document.write( " La Lista es : " + frutas );
