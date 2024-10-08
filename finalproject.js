function gestionarPedido(
  nombre,
  edad,
  cantidad,
  precioUnitario,
  metodoPago,
  horaPedido
) {
  saludarCliente(nombre);

  verificarEdad(edad);

  let costoTotal = calcularCostoTotal(cantidad, precioUnitario);

  costoTotal = aplicarDescuento(costoTotal, edad);

  costoTotal = determinarMetodoPago(metodoPago, costoTotal);

  verificarHoraPedido(horaPedido);

  const impuesto = calcularImpuesto(costoTotal);

  const costoFinal = costoTotal + impuesto;

  console.log("Resumen del pedido:");
  console.log(`Cliente: ${nombre}`);
  console.log(`Edad: ${edad}`);
  console.log(`Producto: ${producto}`);
  console.log(`Cantidad: ${cantidad}`);
  console.log(`Precio unitario: $${precioUnitario}`);
  console.log(`Costo total antes del descuento: $${cantidad * precioUnitario}`);
  console.log(`Descuento aplicado: $${cantidad * precioUnitario - costoTotal}`);
  console.log(`Método de pago: ${metodoPago}`);
  console.log(`Impuesto del cubierto: $${impuesto.toFixed(2)}`);
  console.log(`Costo final del pedido: $${costoFinal.toFixed(2)}`);
}

function validarDatos(nombre) {
  const isNameValid = nombre.trim().length < 50 && nombre.trim().length > 0;
  if (!isNameValid) console.log("El nombre no es valido.");
}
function saludarCliente(nombre) {
  console.log(`¡Hola, ${nombre}! Bienvenido(a) a nuestro restaurante.`);
}

function verificarEdad(edad) {
  edad = parseFloat(edad);
  if (!isNaN(edad)) {
    return true;
  } else {
    console.log("Advertencia: No puedes consumir bebidas alcohólicas.");
  }
}

function verificarStock(cantidad, producto) {
  switch (producto.toLowerCase()) {
    case "manzanas":
      console.log(`${cantidad} de manzanas`);
    case "naranjas":
      console.log(`${cantidad} de naranjas`);
  }
}
function calcularCostoTotal(cantidad, precioUnitario) {
  return cantidad * precioUnitario;
}

function aplicarDescuento(costoTotal, edad) {
  if (edad > 60) {
    return costoTotal * 0.9;
  }
  return costoTotal;
}

function determinarMetodoPago(metodoPago, costoTotal) {
  if (metodoPago === "Efectivo") {
    return costoTotal * 0.9;
  }
  return costoTotal;
}

function verificarHoraPedido(hora) {
  if (hora >= 12 && hora <= 14) {
    console.log("Es hora pico, puede haber demoras en la entrega del pedido.");
  }
}

function calcularImpuesto(costoTotal) {
  return costoTotal * 0.05;
}

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let producto = prompt("Que va a comprar hoy?");
let cantidad = prompt("Cuantas va a llevar?");
const precioUnitario = 150;
let metodoPago = prompt("Como elige abonar la compra?");
const horaPedido = 13;

gestionarPedido(nombre, edad, cantidad, precioUnitario, metodoPago, horaPedido);
