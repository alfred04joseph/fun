function obtenerOpcion() {
  var opcion = prompt("Elige una opción:\n1: Roca\n2: Papel\n3: Tijera");
  
  while (opcion !== "1" && opcion !== "2" && opcion !== "3") {
    opcion = prompt("Opción inválida. Elige una opción válida:\n1. roca\n2. Papel\n3. Tijera");
  }
  
  return parseInt(opcion);
}

function determinarGanador(jugador1, jugador2) {
  switch (jugador1) {
    case 1:
      switch (jugador2) {
        case 1:
          return "¡Es un empate!";
        case 2:
          return "¡Gana El Jugador 2! El Papel Cubre La Roca.";
        case 3:
          return "¡Gana El Jugador 1! Roca rompe tijera.";
      }
      break;
    case 2:
      switch (jugador2) {
        case 2:
          return "¡Gana El Jugador 1! El Papel Cubre La Roca.";
        case 2:
          return "¡Es un empate!";
        case 3:
          return "¡Gana El Jugador 2! Las Tijeras cortan el papel.";
      }
      break;
    case 3:
      switch (jugador2) {
        case 1:
          return "¡Gana El Jugador 2! Roca rompe tijera..";
        case 2:
          return "¡Gana El Jugador 1! Las Tijeras cortan el papel.";
        case 3:
          return "¡Es un empate!";
      }
      break;
  }
}
function jugarPiedraPapelTijera() {
  
  do{

      let jugador1 = obtenerOpcion();
      let jugador2 = obtenerOpcion();
  
      let resultado = determinarGanador(jugador1, jugador2);
      console.log(resultado);
      var jugarDeNuevo = confirm("¿Quieres volver a jugar?");

    }while(jugarDeNuevo)

}
// Ejecutar el juego
jugarPiedraPapelTijera();
