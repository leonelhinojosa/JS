let app = new function() {
  let casa1 = {
  ambientes: 5,
  zona: "Palermo 756, CABA",
  hora: new Date(2022, 4, 15, 12),
  precio: 80000,
  PrecioMasIva:0,
  reservas: []
};
  let casa2 = {
  ambientes: 7,
  zona: "Salto 4800, Saavedra, CABA",
  hora: new Date(2022, 4, 28, 7, 30),
  precio: 10000,
  PrecioMasIva:0,
  reservas: []
};
 let casa3 = {
  ambientes: 4,
  zona: "Puerto Escondido Nordelta",
  hora: new Date(2022, 4, 21, 18),
  precio: 7000,
  PrecioMasIva:0,
  reservas: []
};
 let casa4 = {
  ambientes: 6,
  zona: "Paroissien CABA",
  hora: new Date(2022, 4, 28, 6, 50),
  precio: 50000,
  PrecioMasIva:0,
  reservas: []
};
  


this.array = [casa1, casa2, casa3, casa4];
for(let i = 0; i < this.array.length; i++) {

  let precioIva = this.array[i].precio * 0.21; 

 this.array[i].PrecioMasIva = this.array[i].precio + precioIva;
 
 }
 

this.mostrarPropiedades = function(){


let data = "<br>"

if(this.array.length > 0){

  for (i = 0; i < this.array.length; i++){
    let hora = this.array[i].hora.getHours() < 10 ? '0' + this.array[i].hora.getHours() : this.array[i].hora.getHours();
    let minutos = this.array[i].hora.getMinutes() < 10 ? '0' + this.array[i].hora.getMinutes() : this.array[i].hora.getMinutes();

    data += '<tr>';
    data += '<td>Propiedades # '+ (i+1) + ' AMBIENTE: ' + this.array[i].ambientes + ', ZONA: ' + this.array[i].zona + ', DIA: ' + this.array[i].hora.toLocaleDateString() + " " + hora + ":" + minutos +  "HS."+' </td>';
    data += '<td><button onclick="app.Reservar(' + i + ')">Reservar</button></td>';
    data += '</tr>';
  }
  document.getElementById('propiedades').innerHTML = data;
  document.getElementById('propiedades').style.display = 'block';
}
}

let botonConsultar = document.getElementById("consultas")





this.Reservar = function (item) {
  let el = document.getElementById('documento');
  document.getElementById('documento').value = "";
  document.getElementById('datoscasas').style.display = 'block';
  document.getElementById('propiedades').style.display = 'none';
  document.getElementById('menu1').style.display = 'none';
  document.getElementById('menu2').style.display = 'none';
  document.getElementById('btnback').style.display = 'block';

  let impuesto = this.array[item].precio  == this.array[item].PrecioMasIva ? '' : 'Precios de las propiedades'; 
  let hora = this.array[item].hora.getHours() < 10 ? '0' + this.array[item].hora.getHours() : this.array[item].hora.getHours();
  let minutos = this.array[item].hora.getMinutes() < 10 ? '0' + this.array[item].hora.getMinutes() : this.array[item].hora.getMinutes();

  document.getElementById('datoscasas').innerHTML = "PROPIEDAD # " + (item + 1) + ":<br>AMBIENTE: " + this.array[item].ambientes + '<br>ZONA: ' + this.array[item].zona  + this.array[item].hora.toLocaleDateString() + " " + hora + ":" + minutos + '<br>PRECIO BASE: $'+ this.array[item].precio  + '<br>PRECIO IVA: $' + this.array[item].PrecioMasIva + " " + impuesto;
  document.getElementById('campodoc').style.display = 'block';
  self = this;

  document.getElementById('reserva').onsubmit = function() {
    let d = el.value * 1;
    if (isNaN(d) || d == 0) {
    
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese un dato correcto',
        
      })
    }else{
      let flag = false;
      for (j = 0; j < self.array.length; j++) {
        let auxDoc = self.array[j].reservas.indexOf(d)
        if (auxDoc != -1) {
          if (self.array[j].hora.getFullYear() == self.array[item].hora.getFullYear() &&
            self.array[j].hora.getMonth() == self.array[item].hora.getMonth() &&
            self.array[j].hora.getDate() == self.array[item].hora.getDate()) {
            flag = true;
            break;
          }
        }
      }
      if (flag) {
        
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'usted ya tiene reservado un dia para esta fecha',
          
        })
      }else{
        self.array[item].reservas.push(d);
        
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Dia reservado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        document.getElementById('menu1').style.display = 'block';
        document.getElementById('menu2').style.display = 'block';
        document.getElementById('datoscasas').style.display = 'none';
        document.getElementById('campodoc').style.display = 'none';

        document.getElementById('btnback').style.display = 'none';
      }
    }
  }
}

this.consultarReserva = function () {
  let el = document.getElementById('Consulta');
  let d = el.value * 1;
  if (isNaN(d) || d == 0) {
      
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese un dato correcto',
        
      })
  }else{
    let data = '<br>DIAS RESERVADOS DE ' + d;
    for (i = 0; i < this.array.length; i++) {
      let auxDoc = this.array[i].reservas.indexOf(d)
      if (auxDoc != -1) {
        let hora = this.array[i].hora.getHours() < 10 ? '0' + this.array[i].hora.getHours() : this.array[i].hora.getHours();
        let minutos = this.array[i].hora.getMinutes() < 10 ? '0' + this.array[i].hora.getMinutes() : this.array[i].hora.getMinutes();
        data += '<tr>';
        data += '<td>Propiedades # '+ (i+1) + "= AMBIENTE: " + this.array[i].ambientes + ', ZONA: ' + this.array[i].zona + this.array[i].hora.toDateString() + " " + hora + ":" + minutos + "HS."+' </td>';
        data += '</tr>';
      }
    }
    if (data == '<br>DIAS RESERVADOS DE ' + d) {
     
     Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No existen dias asociados a dicho documento',
      
    })
    }else{
      document.getElementById('menu1').style.display = 'none';
      document.getElementById('menu2').style.display = 'none';
      document.getElementById('propiedades').style.display = 'block';
      document.getElementById('propiedades').innerHTML = data;
      document.getElementById('btnback').style.display = 'block';
    }
  }
};

this.Volver = function (){
  document.getElementById('datoscasas').style.display = 'none';
  document.getElementById('campodoc').style.display = 'none';
  document.getElementById('propiedades').style.display = 'none';
  document.getElementById('btnback').style.display = 'none';
  document.getElementById('menu1').style.display = 'block';
  document.getElementById('menu2').style.display = 'block';
  document.getElementById('Consulta').value = "";
};


}

let arrayDepartamentos = [{zonas: "Puerto Escondido Nordelta"}, {zonas: "Paroissien CABA" }]
let DepartamentosJSON = JSON.stringify(arrayDepartamentos)

localStorage.setItem("departamentos", DepartamentosJSON)


localStorage.removeItem("nombre")


let arrayInmuebles = [{zonas: "Palermo 756, CABA"}, {zonas: "Salto 4800, Saavedra, CABA"}, {zonas: "Pilara, Pilar CABA"}]

let InmueblesJSON = JSON.stringify(arrayInmuebles)
localStorage.setItem("inmuebles", InmueblesJSON)

localStorage.removeItem("nombre")




