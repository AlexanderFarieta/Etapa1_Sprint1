let pantalla = 0;
let vrCompu = 820000;
let cantidad = 0;
let valor = 0;
let porcentaje = 0;
let descuento = 0;
let total = 0;

function calcular() {

window.getElementById('inicio').window = '';
window.getElementById('Calculadora').window = pantalla;
window.getElementById('Calculadora').innerHTML = pantalla;

  cantidad = document.getElementById('cantidad-computadores').value;
  document.getElementById('cantidad-computadores').innerHTML = cantidad;
  valor = document.getElementById('valor-compra').value;
  valor = cantidad * vrCompu
  document.getElementById('valor-compra').innerHTML = valor;

if (valor>=1640000 && valor<=3280000){
  document.getElementById('porcentaje-descuento').value = porcentaje;
  porcentaje = "15%"
  document.getElementById('porcentaje-descuento').innerHTML = porcentaje;
  document.getElementById('valor-descuento').value = descuento;
  descuento = valor * 0.15
  document.getElementById('valor-descuento').innerHTML = descuento;
  document.getElementById('total').value;
  total = valor - descuento
  document.getElementById('total').innerHTML = total;
}
else if (valor > 3280000 && valor <= 6560000){
  document.getElementById('porcentaje-descuento').value = porcentaje;
  porcentaje = "25%"
  document.getElementById('porcentaje-descuento').innerHTML = porcentaje;
  document.getElementById('valor-descuento').value = descuento;
  descuento = valor * 0.25
  document.getElementById('valor-descuento').innerHTML = descuento;
  document.getElementById('total').value;
  total = valor - descuento
  document.getElementById('total').innerHTML = total;
}
else if (valor > 6560000 && valor <= 9840000) {
  document.getElementById('porcentaje-descuento').value = porcentaje;
  porcentaje = "35%"
  document.getElementById('porcentaje-descuento').innerHTML = porcentaje;
  document.getElementById('valor-descuento').value = descuento;
  descuento = valor * 0.35
  document.getElementById('valor-descuento').innerHTML = descuento;
  document.getElementById('total').value;
  total = valor - descuento
  document.getElementById('total').innerHTML = total;
}
else {
  document.getElementById('porcentaje-descuento').value = porcentaje;
  porcentaje = "No hay descuento para esta compra"
  document.getElementById('porcentaje-descuento').innerHTML = porcentaje;
  document.getElementById('valor-descuento').value = descuento;
  descuento = 0
  document.getElementById('valor-descuento').innerHTML = descuento;
  document.getElementById('total').value;
  total = valor
  document.getElementById('total').innerHTML = total;
}

  console.log(total)
}