let app = new function() {
    casa1 = {
    hora: new Date(2018, 4, 15, 12),
    precio: 8000,
    reservas: []
  };
    casa2 = {
    hora: new Date(2018, 4, 28, 7, 30),
    precio: 10000,
    reservas: []
  };
    casa3 = {
    hora: new Date(2018, 4, 21, 18),
    precio: 7000,
    reservas: []
  };
   casa4 = {
    hora: new Date(2018, 4, 28, 6, 50),
    precio: 5000,
    reservas: [1078]
  };
   casa5 = {
    hora: new Date(2018, 5, 1, 19, 30),
    precio: 15000,
    reservas: []
  };


}


this.casas = [casa1, casa2, casa3, casa4, casa5];
for(i = 0; i < this.dia.length; i++){

 let precio = 0

 if (this.casas[i]) 
  precio = this.casas[i].precio * 0.21; 

this.casas[i].precio = this.casas[i].precio

}




function mostrarDia(){
  data = '<br>';


}







function mostrarAlerta(){

    Toastify({
        text: "usted no tiene ninguna reserva",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#ff0000",
        },
        onClick: function(){} // Callback after click
      }).showToast();


}

