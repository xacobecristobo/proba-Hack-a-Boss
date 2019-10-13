

 /* * * * * * * * * * * * * * * * * * * * * *
*  3. ASINCRONIA                            *
* * * * * * * * * * * * * * * * * * * * * * *

En este ejercicio se comprobará la competencia de los alumnos en el concepto de asincronía 
Se proporcionan 3 archivos  csv separados por comas y se deberán bajar así­ncronamente (promises) 

A la salida se juntarán los registros de los 3 archivos en un array que será el parámetro de entrada 
de la funcion findIPbyName(array, name ,surname) que buscará una entrada en el array y devolverá la IP correspondiente

Una vez hallada la IP ha de mostrarse por pantalla

para llamar a la función utilizad el nombre Cari Wederell*/

const fs = require('fs');

const datos1 = fs.readFileSync(`${__dirname}/../resources/MOCK_DATA1.csv`, 'latin1').toString().split(',');
const datos2 = fs.readFileSync(`${__dirname}/../resources/MOCK_DATA2.csv`, 'latin1').toString().split(',');
const datos3 = fs.readFileSync(`${__dirname}/../resources/MOCK_DATA3.csv`, 'latin1').toString().split(',');

Promise.all(datos1, datos2, datos3).then(


    function findIPbyName(name, surname) {
        const NAME_POSITION = 1;
        const SURNAME_POSITION = 2
        const ip = array;

        Promise.all(datos1, datos2, datos3)

            .map(array => array.split(';'))
            .filter(array => array[NAME_POSITION].toUpperCase().indexOf(name.toUpperCase()) !== -1)

        return array[-1]
    })

console.log(findIPbyName(Cari, Wederell))