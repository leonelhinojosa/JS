class Propiedades{

    constructor(ambientes,zona, valor){

         this.ambientes = ambientes.toUpperCase;
         this.zona = zona.toUpperCase;
         this.valor = parseFloat(valor);
    }

    
}
const casas = new Propiedades (5,"Palermo 756, CABA", 15000 );
const casas2 = new Propiedades (7,"Salto 4800, Saavedra, CABA", 20000);
const departamento = new Propiedades (4,"Puerto Escondido Nordelta", 50000);
const departamentos = new Propiedades (6,"Paroissien CABA",45000);
    