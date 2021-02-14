///gustavo romero
const filtrarOrdenes = () => {
    console.time('Inicio Filtro de Ordenes')
    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.ingredients.find( elemento => elemento === "lechuga" ) &&
        sandwichOrder.ingredients.find( elemento => elemento === "palta" )
    )
    console.log(resultado)
}

const filtrarporid = (id) => {
   
    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.id===id   
    )
    try {
        return desestructurar1(resultado)
        
    } catch (error) {
        return "no se encontro orden con id "+id
    }
        
}

const desestructurar1 = (objeto) => {
    const [
        {
        ordered: fechaorden,
        protein: proteina,
        bread: pan
        }
 
    ] = objeto;
    return `La orden fue realizada el ${fechaorden}, la orden llevó ${proteina} y ${pan} `;
};
//respuesta  filtrarporid(1)
//ejercicio 2

const filtrarporid2 = (id) => { 
    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.id===id   
    )
        return  desestructurar2(resultado)
          
}

const desestructurar2 = (objeto) => {
    const [ {ingredients: [...lista]  }] = objeto;
    return lista.includes('pepinillos')
};

//ejercicio 4

const filtrarporfecha = (fecha) => { 
    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.ordered === fecha
    )
        return  "Se encontraron" +resultado.length +"ordenes para la fecha "+ fecha
          
}


//ejercicio 5

const filtrarPorIngredientes = () => { 
    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.protein==="not burger" && sandwichOrder.ingredients.includes("cebolla caramelizada")
    ) 
        return   recorrerArreglo(resultado)
          
}

const recorrerArreglo = (objeto) => {
     
    for (var i = 0; i <objeto.length; i+=1) {
        
        console.log(desestructurarfechas(objeto[i]));
      }
};


const desestructurarfechas = (objeto) => {
    const 
        {
        ordered: fechaorden 
        }
 
     = objeto;
    return   fechaorden //`${fechaorden}`;
};





const orden5 = () => {
    const resultado = sandwichOrders.filter(sandwichOrder =>
        sandwichOrder.protein === "not burger" && 
        sandwichOrder.ingredients.find(ingrediente => ingrediente === "cebolla caramelizada")
    )

    return resultado.map(sandwichOrder => sandwichOrder.ordered)
}

//ultimo ejercicio



// ejercicio 6 forma2
const filterOrdersByType = ({ type = '', filter = ''}) => sandwichOrders.filter(sandwichOrder => sandwichOrder[type] === filter)
const bagette = filterOrdersByType({ type: 'bread', filter: 'bagette'}).length;
const brioche = filterOrdersByType({ type: 'bread', filter: 'brioche'}).length;
const pita = filterOrdersByType({ type: 'bread', filter: 'pita'}).length;
const marraqueta = filterOrdersByType({ type: 'bread', filter: 'marraqueta'}).length;
const hallulla = filterOrdersByType({ type: 'bread', filter: 'hallulla'}).length;

    const result = {
              
        hallula: hallulla,
        marraqueta:marraqueta,
        bagette: bagette,
        brioche: brioche,
        pita: pita,

        
    }
       


