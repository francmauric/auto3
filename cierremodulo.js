let autos = require("./autos");

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000,
  };

let concesionaria = {
  autos: autos,

  buscarAuto: function (patente) {
    for (let i = 0; i <= autos.length; i++) {
      if (autos[i].patente == patente) {
        autos[i];
        return autos[i];
      }
    }
    return null;
  },

  venderAuto: function (patente) {
    let auto = this.buscarAuto(patente);

    auto.vendido = true;

    return auto;
  },
  autosParaLaVenta: function () {
    let autoNoVendido = autos.filter(function (auto) {
      return auto.vendido === false;
    });
    return autoNoVendido;
  },
  autosNuevos: function () {
    let auto0km = this.autosParaLaVenta();
    return auto0km.filter((auto) => auto.km < 100);
  },
  listaDeVentas: function () {
    let autoVen = autos.filter(function (auto) {
      return auto.vendido === true;
    });

    let listado = autoVen.map((autos) => autos.precio);

    return listado;
  },
  totalDeVentas: function () {
    let autoVen = this.listaDeVentas();
    let total = autoVen.reduce(function (acumulador, elemento) {
      return acumulador + elemento;
    });
    return total;
  },
  
  
  puedeComprar: function (auto, persona)   {  
   if ((persona.capacidadDePagoTotal >= auto.precio) && persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas)) {
    return true
 } else { return false }
}
}
//console.log(concesionaria.buscarAuto("jjk116"))
console.log(concesionaria.venderAuto("jjk116"));
//console.log(concesionaria.venderAuto("APL123"))

//console.log(concesionaria.autosParaLaVenta())
// console.log(concesionaria.autosNuevos())
// console.log(concesionaria.listaDeVentas())
//console.log(concesionaria.totalDeVentas())
//console.log(concesionaria.puedeComprar("ford"))
