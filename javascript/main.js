let nombre = prompt("ingrese su nombre");
let opcion;
const dias = ["LUNES","MARTES","MIERCOLES", "JUEVES","VIERNES"];
let existe2 = 0;
let vendido = 0;
let mensaje = document.getElementById("reserva")




Swal.fire("bienvenido " +nombre+ " a inmobilaria Arg" )


class Propiedades{

     constructor(ambientes,zona, valor){

          this.ambientes = ambientes.toUpperCase;
          this.zona = zona.toUpperCase;
          this.valor = parseFloat(valor);
     }

     calcular_iva(){

          this.valor = this.valor + (this.valor * 0.21);
     }
}
const casas = new Propiedades (5,"Palermo 756, CABA", 15000 );
const casas2 = new Propiedades (7,"Salto 4800, Saavedra, CABA", 20000);
const departamento = new Propiedades (4,"Puerto Escondido Nordelta", 50000);
const departamentos = new Propiedades (6,"Paroissien CABA",45000);


function comprobarDia(existe){
    
     existe = -1;
 
     while(existe == -1){
         
         for(let i = 0; i <5; i++){
 
             if(diaHabil == dias[i] ){
                 
                 existe = i;
             }
         }
 
         if(existe == -1){
             alert("el dia que ingreso es incorrecto");
             diaHabil = prompt("Elija el dia que quiere visitar la vivienda (trabajamos solo de lunes a viernes)\nRECUERDE INGRESAR EL DIA SOLO EN MAYUSCULAS");
         }
         else{
             alert(`Genial lo esperamos el proximo ${dias[existe]}`); 
         }
         
     }
     
     existe2 = existe;
 
     return existe;
 
 }

alert("Seleccione la casa/departamento que quiere comprar")
opcion = parseInt(prompt("1-casa1 U$S 15000\n2-casa2 U$S 20000\n3-departamento1 U$S 50000\n4-departamento2 U$S 45000\n5- Salir"));

do {

     

     switch (opcion) {
 
         case 1:
             alert("Gracias por tu compra");
             casas.calcular_iva();
             alert("El precio final a abonar + iva incluido es de U$S"+casas.valor);
             mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()}</h2> <br> <h3> Monto a abonar $${casas.valor} ARS </h3>`;
             vendido = 1;

             break;
         case 2:
             alert("Gracias por tu compra");
             casas2.calcular_iva();
             alert("El precio final a abonar + iva incluido es de U$S"+casas2.valor);
             mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()}</h2> <br> <h3> Monto a abonar $${casas2.valor} ARS </h3>`;
             vendido = 1;
             break;
         case 3:
             alert("Gracias por tu compra");
             departamento.calcular_iva();
             alert("El precio final a abonar + iva incluido es de U$S"+departamento.valor);
             mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()}</h2> <br> <h3> Monto a abonar $${departamento1.valor} ARS </h3>`;
             vendido = 1;
             break;
 
         case 4:
             alert("Gracias por tu compra");
             departamentos.calcular_iva();
             alert("El precio final a abonar + iva incluido es de U$S"+departamentos.valor);
             mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()}</h2> <br> <h3> Monto a abonar $${departamento2.valor} ARS </h3>`;
             vendido = 1;
             break;

          case 5:
               vendido = 1;
            break;
 
         default:
             alert("numero incorrecto, vuelva a ingresarlo");
             break
          
          }
 
     

     if (opcion != 5 && vendido == 0){
          opcion = parseInt(prompt("1- casa1 U$S 15000\n2-casa2 U$S 20000\n3-departamento1 U$S 50000\n4-departamento2 U$S 45000 \n5- Salir"));
          }
          if(opcion == 5){
              alert("Muchas gracias por elegirnos");
          }

}while(vendido != 1);

let diaHabil = prompt("Elija el dia que quiere visitar la vivienda (trabajamos solo de lunes a viernes)\nRECUERDE INGRESAR EL DIA SOLO EN MAYUSCULAS");
 comprobarDia(existe2);


 let numero = document.getElementById("numero__celular")

 numero.innerText = "Numero 1150778934"

 console.log(numero.innerText)

 let telefono = document.getElementById("telefono")

 telefono.innerText= "Telefono fijo  44676606"

 console.log(telefono.innerText);


 let section = document.getElementById("acerca__nosotros")

 
 
         