//lista de alumnos:
let alumno1 = "JOSUE";
let alumno2 = "OWEN";
let alumno3 = "ANGELO";
let alumno4 = "MARIANO";
let alumno5 = "FACUNDO";

let listaDeAlumnos = ("LISTA DE ALUMNOS:" + "\n\n" + "1- " + alumno1 + "\n" + "2- " + alumno2 + "\n" + "3- " + alumno3 + "\n" + "4- " + alumno4 + "\n" + "5- " + alumno5);
alert(listaDeAlumnos);

let ingresarAlumno = prompt("¿Cuál alumno eres?").toUpperCase();

while (ingresarAlumno !== "") {
  if (ingresarAlumno === alumno1.toUpperCase()) {
    alert("JOSUE, tus notas son:  9  8  9.");
    break;
  } else if (ingresarAlumno === alumno2.toUpperCase()) {
    alert("OWEN, tus notas son:  7  8  10.");
    break;
  } else if (ingresarAlumno === alumno3.toUpperCase()) {
    alert("ANGELO, tus notas son:  8, 9, 7.");
    break;
  } else if (ingresarAlumno === alumno4.toUpperCase()) {
    alert("MARIANO, tus notas son:  1, 2, 3.");
    break;
  } else if (ingresarAlumno === alumno5.toUpperCase()) {
    alert("FACUNDO, tus notas son:  2, 2, 7.");
    break;
  } else {
    alert("No estás en la lista de alumnos!");
    ingresarAlumno = prompt("¿Cuál alumno eres?").toUpperCase();
  }
}

let calculaAlumno = ("Ahora, calcula tu promedio final.");
alert(calculaAlumno);

let valor1 = parseInt(prompt("Ingrese su primera nota."));
let valor2 = parseInt(prompt("Ingrese su segunda nota."));
let valor3 = parseInt(prompt("Ingrese su tercera nota."));

function calcularPromedio(nota1, nota2, nota3) {
  let promedio = (nota1 + nota2 + nota3) / 3;
  alert("Tu promedio es: " + promedio.toFixed(2));
}

calcularPromedio(valor1, valor2, valor3);

let notaFinal = ("Ahora, coloca tu promedio final.");
alert(notaFinal);

let promedioFinal = prompt("Ingresa tu promedio final.");
if (promedioFinal <= 6.49) {
  alert("Usted está DESAPROBADO. Promedio final: " + promedioFinal);
} else if (promedioFinal >= 6.50 && promedioFinal <= 10) {
  alert("Usted está APROBADO. Promedio final: " + promedioFinal);
}