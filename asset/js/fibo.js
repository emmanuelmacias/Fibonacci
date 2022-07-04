const serie = [0, 1];
let fiboAlert = alert("Vamos a generar una sucesión de numeros Fibonacci.");
let fiboAlert2 = alert("Esta sucesión fue descrita en Europa por Leonardo de Pisa, matemático italiano del siglo XIII, también conocido como Fibonacci.");
let fiboAlert3 = alert("Tiene numerosas aplicaciones en ciencias de la computación, matemática y teoría de juegos.");
const numero = parseInt(prompt('Ingrese cuantas veces quiere generarlo: '));
const opcion = confirm("¿Quiere mostrarlo en la web? De caso contrario se mostrará en consola.");


switch (opcion) {   
    case true: 
    for (let i = 2; i <= numero; i++) {
    serie[i] = serie[i - 2] + serie[i - 1];
    document.write(serie[i] + "<br/>");
}
break;
    default:
    for (let i = 2; i <= numero; i++) {
    serie[i] = serie[i - 2] + serie[i - 1];
    console.log(serie[i]);
}
break;
}