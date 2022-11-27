let ingreseNombre = prompt("Ingresar nombre");
let ingreseApellido = prompt("Ingresar Apellido");
let IngreseCorreoElectronico = prompt("Ingrese Correo Electronico");
alert(`Bienvenido ${ingreseNombre} ${ingreseApellido}`);
if (ingreseNombre != "" && ingreseApellido != "") {
  alert(`Bienvenido ${ingreseNombre} ${ingreseApellido}`);
} else {
  alert("Error: Ingresar nombre y apellido");
}

let n4 = Number;
let clickboton = Number;
let cuotasporpagar = Number;
n4 = 0;
let element = document.getElementById("boton1");
let button = document.querySelector(".boton2");
let button2 = document.querySelector(".boton3");
element.addEventListener("click", buttonstate);

function buttonstate() {
  if (n4 == 0) {
    button.disabled = true;
    button2.disabled = true;
  } else {
    button.disabled = false;
    button2.disabled = false;
  }
}
function botonCalculo() {
  document.getElementById("tcuerpo").innerHTML = "";
  let montoPrestamo = Number(document.getElementById("montoPrestamo").value);
  let numCuotas = Number(document.getElementById("numCuotas").value);
  let interes = Number;
  if (numCuotas >= 12 && numCuotas != "") {
    interes = 25;
    alert("Como estas pagando a un año, o más, tu interes es del 25%");
  } else if (numCuotas == "") {
    alert("tienes que colocar el numero de cuotas");
  } else {
    interes = 12.5;
    alert(
      "Ya que quieres pagar en menos de un año, tu interes es solo de 12.5% mensual "
    );
  }

  if (montoPrestamo > 0) {
    for (i = 1; i <= numCuotas; i++) {
      ca = montoPrestamo / numCuotas;
      d1 = ca.toFixed(2);
      i2 = (montoPrestamo * interes) / 100 / numCuotas;
      d2 = i2.toFixed(2);
      r = ca + i2;
      d3 = r.toFixed(2);
      document.getElementById("tcuerpo").innerHTML =
        document.getElementById("tcuerpo").innerHTML +
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
    }
    n1 = montoPrestamo.toFixed(2);
    t_p = r * numCuotas;
    d5 = t_p.toFixed(2);
    n4 = numCuotas;
  } else {
    alert("te falta agregar un numero");
  }
}
cuotasporpagar = n4;
clickboton = 0;

function pedir_prestamo() {
  if (clickboton == 0) {
    alert("Estamos procesando su solicitud");
    clickboton++;
  } else {
    alert("Seguro quieres hacer un prestamo?");
  }
}
function pago_cuota() {
  if (n4 != 0) {
    n4 = n4 - 1;
    for (let counter = 1; counter <= 1; counter++) {
      console.log(counter);
      alert("" + counter + "");
    }
    alert("Gracias por pagar una cuota! te quedan " + n4 + " cuotas por pagar");
  } else {
    alert("Ya pagaste toda tu deuda gracias por preferirnos");
  }
}
