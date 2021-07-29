var numero = prompt("Ingeresa tu numero de formulario");
var limite = prompt("Hasta que numero deseas que se repita el formulario.");

document.write("tu numero de formulario es: " + numero + "<br>")
for(var i = 1; i <= limite; i++){ //i = i + 1
    var nombre = prompt("Cual es tu nombre?");
    var apellido = prompt("Cual es tu apellido");
    var edad   = prompt("Cuantos años tienes?");
    var escuela = prompt("De que escuela vienes?");
    var materia = prompt("Cual es tu materia favorita?");
    document.write( i +"<&NBSP>" + nombre + "<br>")
    document.write( i + apellido + "<br>")
    document.write( i + edad + "<br>")
    document.write( i + escuela + "<br>")
    document.write( i + materia + "<br>")
}