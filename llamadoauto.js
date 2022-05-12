let autos = require("./autos");
let patente = "APL13"
let km= 200;
let autoEncontrado = [];
for(let i=0; i<= autos.length; i++){
   if (autos[i].km === km){
     autoEncontrado = autos[i]
    console.log(autoEncontrado)  
   }else{
       console.log(null)
   }}

//console.log(autos[1].patente)

//lista de autos una forma
 listaDeVentas: function(){
    let autoVen = autos.filter(function(auto){
        return auto.vendido === true;
     })

    //let precio = autoVend.precio

    return autoVen[0].precio
 }

 //otra forma

 for(let i=0; i<= autos.length; i++){
    if (autos[i].vendido == true){
       let precio = autos[i].precio
       let arrayPrecio = []
       arrayPrecio.push(autos[i].precio)

       return arrayPrecio
    }
 }return null
  



//total de ventgas

totalDeVentas:function(){
    let autoVen = this.listaDeVentas()
   let total = autoVen.reduce((acumulador, elemento)=> acumulador + elemento,0)
    return total
 }