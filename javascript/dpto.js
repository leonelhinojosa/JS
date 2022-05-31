let arrayDepartamentos = [{zonas: "Puerto Escondido Nordelta"}, {zonas: "Paroissien CABA" }]
let DepartamentosJSON = JSON.stringify(arrayDepartamentos)

localStorage.setItem("departamentos", DepartamentosJSON)


localStorage.removeItem("nombre")
localStorage.removeItem("inmuebles")