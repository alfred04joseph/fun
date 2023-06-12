function convertirARomano(numero) {
    // Definir los símbolos y sus valores correspondientes
    const romano = [
      { valor: 1000, romano: 'M' },
      { valor: 900, romano: 'CM' },
      { valor: 500, romano: 'D' },
      { valor: 400, romano: 'CD' },
      { valor: 100, romano: 'C' },
      { valor: 90, romano: 'XC' },
      { valor: 50, romano: 'L' },
      { valor: 40, romano: 'XL' },
      { valor: 10, romano: 'X' },
      { valor: 9, romano: 'IX' },
      { valor: 5, romnao: 'V' },
      { valor: 4, romano: 'IV' },
      { valor: 1, romano: 'I' }
    ];
  
    let resultado = '';
  
    for (let i = 0; i < romano.length; i++) {
      while (numero >= romano[i].valor) {
        resultado += romano[i].romano;
        numero -= romano[i].valor;
      }
    }
  
    return resultado;
  }
  
  const numeroEntero = parseInt(prompt('Ingrese un número entero:'), 10);
  
  const numeroRomano = convertirARomano(numeroEntero);
  
  console.log('El número romano equivalente es: ' + numeroRomano);
  