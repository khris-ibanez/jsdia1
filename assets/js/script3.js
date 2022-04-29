//creacion de variables y entrada de datos
var numero1= prompt ("ingrese el primer numero");
var numero2= prompt ("ingrese el segundo numero");
var numero3= prompt ("ingrese el tercero numero");
var numero4= prompt ("ingrese el cuarto numero");
var numero5= prompt ("ingrese el quinto numero");
//procesameinto
var promedio= ((parseInt(numero1)+parseInt(numero2)+parseInt(numero3)+parseInt(numero4)+parseInt(numero5))/5);
//visualizacion de los resultados del procesamiento
alert(`El promedio de los cinco numeros ingresados es: ${promedio}.`);