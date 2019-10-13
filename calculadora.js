/* * * * * * * * * * * * * * * *
*  1. C A L C U L A D O R A   *
* * * * * * * * * * * * * * * *

Crea un programa que permita realizar sumas, restas, multiplicaciones y divisiones. 

    - El programa debe recibir dos parámeros (n1, n2).

    - Debe existir una variable que permita seleccionar de alguna forma el tipo de operación (suma, resta, multiplicación 
      o división).

    - Opcional: agrega una operación que permita elevar n1 a la potencia n2.*/

const suma = 'suma';
const resta = 'resta';
const division = 'division';
const potenciamultiplicacion = 'multiplicacion';
const potencia = 'potencia';

function calculadora(num1, num2, operacion) {

    if (operacion == '+') {
        return (parseFloat(num1) + parseFloat(num2));
    }
    if (operacion == 'resta') {
        return (num1 - num2);
    }
    if (operacion == 'division') {
        return (num1 / num2);
    }
    if (operacion == 'multiplicacion') {
        return (num1 * num2);
    }
    else {
        (operacion == 'potencia') 
        return (Math.pow(num1, num2));

    }
} console.log(calculadora(2, 3, suma));

  

        