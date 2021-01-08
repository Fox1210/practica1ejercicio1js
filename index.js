// Import stylesheets
import "./style.css";
//declaramos las variables
var numA;
var numB;
var prueba;
//sacamos los valores del formulario
numA = document.getElementById("numero1").value;
numB = document.getElementById("numero2").value;

prueba = "texto de prueba: a= " + numA + ", el numero b= " + numB;
console.log(prueba);
