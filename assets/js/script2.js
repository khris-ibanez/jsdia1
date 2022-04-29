//creacion de variable y entrada de datos
var dias= prompt("ingrese el total de dias");
//procesamiento
var prueba1= Math.floor( parseInt(dias)/parseInt(año));
var prueba2= parseInt(dias)%365;
var prueba3= Math.floor( parseInt(prueba2)/7);
var prueba4= Math.floor( parseInt(prueba2)%7);
//visualizacion de los resultados del procesamiento
alert(`${prueba1} año. `);
alert(`${prueba3} semanas. `);
alert(`${prueba4} dias. `);