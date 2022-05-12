/*let fechaActual = new Date();

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDay();

let meses = ["enero", "febrero", "marzo", "abril", "mayo"]
let diasSemana= ["Domingo","lunes", "martes","miercoles","jueves","viernes","sabado"]
console.log("hoy es el " + diasSemana[dia] + " de " + meses[mes]+ " de " + anio)*/


let fecha = new Date()



console.log("Día: "+fecha.getDate())
console.log('Hoy es el día '+ fecha.getDate() +' del mes '+ fecha.getMonth() + ' del año '+fecha.getFullYear())
