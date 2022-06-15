 fetch('propiedades.json')
     .then(response => response.json())
    .then(propiedades => {

      propiedades.forEach((propiedad) =>{

           let {index, ambiente, zona, valor} = propiedad
           divClientes.innerHTML += `
            
            <div id="cliente${index}">
            <h3>Ambiente: ${ambiente}</h3>
            <h5>zona: ${zona}</h5>
            <h5>valor: ${valor}</h5>
            
            
             `



      })

     })

   

