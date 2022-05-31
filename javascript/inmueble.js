let arrayInmuebles = [{zonas: "Palermo 756, CABA"}, {zonas: "Salto 4800, Saavedra, CABA"}, {zonas: "Pilara, Pilar CABA"}]


let InmueblesJSON = JSON.stringify(arrayInmuebles)

localStorage.setItem("inmuebles", InmueblesJSON)

localStorage.removeItem("departamentos")
localStorage.removeItem("nombre")







    fetch('clientes.json')
    .then(response => response.json())
    .then(clientes => {

        clientes.forEach((cliente) =>{

            let {index, ambiente, zona, valor} = cliente
            divClientes.innerHTML += `
            
            <div id="cliente${index}">
            <h3>Ambiente: ${ambiente}</h3>
            <p>zona: ${zona}</p>
            <p>valor: ${valor}</p>
            
            
            `



        })

    })

   

