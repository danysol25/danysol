var nombre= "Daniela Sol";
var profesion="desarrolladora web";
var edad= 32;

/*var datos = document.getElementById("data");
datos.innerHTML = `
    <h1>soy la caja de datos</h1>
    <h2> mi nombre es ${nombre}</h2>
    <h3>Profeson: ${profesion}</h3>
`;

if (edad>=21) {
    datos.innerHTML += '<h2>soy mayor de edad</h2>';
} else {
    datos.innerHTML += '<h2>soy menor de edad</h2>';
}

for (var i= 2000; i<=2020; i++){
    datos.innerHTML += '<p>estamos en el año: </p>' +i;
}*/

/* comentario en JAVASCRIPT */

/* funciones simples 
function muestraDatos (nombre,edad) {
    var losDatos =  `
        <h1>soy la caja de datos</h1>
        <h2> mi nombre es ${nombre}</h2>
        <h3>Edad: ${edad}</h3>
    `;
    return losDatos;
}

function imprimir(){
   var datos = document.getElementById("data");
   datos.innerHTML = muestraDatos("Juan", 28); 
}

imprimir();
*/

/* Ejercicio de prompt + condicional simple 
var numero1 = parseInt(prompt("Introducir el primer número: ", 0));
var numero2 = parseInt(prompt("Introducir el segundo número: ", 0));

while (numero1<=0 || numero2<= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introducir el primer número: ", 0));
    numero2 = parseInt(prompt("Introducir el segundo número: ", 0));
}

if (numero1 == numero2){
    alert("los números son iguales");
} else if (numero1>numero2){
    alert (numero1 + " es mayoor que " + numero2);
} else if (numero2> numero1) {
    alert ("el numero mayor es: " + numero2);
    alert ("el numero menor es: " + numero1);
} else  {
    alert ("no ha introducido datos correctos. Vuelva a intentarlo.");
}

*/
/* Ejercicio de suma, media y bucle 
var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("introduce un número hasta que pongas uno negativo", 0));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;
        //suma += numero;
        contador++;
    }

} while (numero >= 0);

alert("la suma de todos los números es: " + suma);
alert("la media de todos los números es: " + (suma/contador));
*/

/*mostrar números impares que hay entre dos números introducidos por el usuario */
/*
var numero3 = parseInt(prompt("Introducir número 1: ", 0));
var numero4 = parseInt(prompt("Introducir número 2: ", 0));

while (numero3 < numero4) {
    numero3++;
    if(numero3%2 != 0){
        document.write("el " + numero3 + " es impar. <br/>");
    }
}
*/

/*
números divisores. un número es divisor por otro, cuando al dividir, el resto (%) es cero.

*/
/*
var numero5 = parseInt(prompt("Mostrar tabla del: ", 1));

document.write("<h2>Tabla del " + numero5 +  " :</h2>")
for (var i = 1; i<=10; i++) {
    document.write(i + " x " + numero5 + " = " +(i*numero5) + "<br/>");
}


//muestra todas las tablas (hasta la del 9, en este caso)
for (var c = 1; c<=9; c++) {

    document.write("<h2>Tabla del " + c +  " :</h2>")
    for (var i = 1; i<=10; i++) {
        document.write(i + " x " + c + " = " +(i*c) + "<br/>");
    }
}
*/
//calculadora

/*
var numero6 = parseInt(prompt("Introducir número 1: ", 0));
var numero7 = parseInt(prompt("Introducir número 2: ", 0));

while(numero6 < 0 || numero7 < 0 || isNaN(numero6) || isNaN(numero7)) {
      numero6 = parseInt(prompt("Introducir número 1: ", 0));
      numero7 = parseInt(prompt("Introducir número 2: ", 0));
}

var resultado = "la suma es: " + (numero6+numero7)+ "<br/>"+
                "la resta es: " + (numero6-numero7)+ "<br/>"+
                "la división es: " + (numero6/numero7)+ "<br/>"+
                "la multiplicación es: " + (numero6*numero7)+ "<br/>";

var resultadoCMD = "la suma es: " + (numero6+numero7)+ "\n"+
                "la resta es: " + (numero6-numero7)+ "<\n>"+
                "la división es: " + (numero6/numero7)+ "<\n>"+
                "la multiplicación es: " + (numero6*numero7)+ "<\n>";

document.write(resultado);
alert(resultadoCMD);
*/
// \n es el salto de línea para consola y alertas. el <br/> es sólo para HTML
