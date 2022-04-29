//creacion de variables
var datoformulakel=273.15;
var datoformulafahr=9/5;
var datoformulafahr2=32;
//entrada de datos
var celsius= prompt("Ingrese el valor de la temperatura en grados Celsius");
//procesamiento de datos
var celtokel = parseFloat(celsius)+parseFloat(datoformulakel);
var celtofahr= (parseFloat(celsius)*parseFloat(datoformulafahr))+parseFloat(datoformulafahr2);
//visualizacion de los resultados del procesamiento
alert(`${celtokel} k`);
alert(`${celtofahr} °F`);