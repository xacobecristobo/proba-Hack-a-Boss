
/* * * * * * * * * * * * * * * * * * * * *
 *  2. D A D O   E L E C T R Ó N I C O   *
 * * * * * * * * * * * * * * * * * * * * *
  
     - Simula el uso de un dado electrónico cuyos valores al azar irán del 1 al 6. 
 
     - Crea una variable "totalScore" en la que se irán almacenando la puntuación total tras cada una de las tiradas. 

     - Una vez alcanzados los 50 puntos el programa se detendrá y se mostrará un mensaje que indique el fin de la partida.

     - Debes mostrar por pantalla los distintos valores que nos devuelva el dado (números del 1 al 6) así­ como el valor de la
       variable "totalScore" tras cada una de las tiradas. */

let totalScore = 0;
let count = 0
while (totalScore < 50) {
    let tiradaDado = Math.floor(Math.random() * 6) + 1;
    totalScore += tiradaDado;
    count++

    console.log(`tirada numero ${count}:`, tiradaDado);
    console.log('Score', totalScore)


}

console.log('Fin de partida')