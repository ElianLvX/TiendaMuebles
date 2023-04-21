// Consumo de PokeApi

async function ComsumoX(numPk) {
    let url = `https://pokeapi.co/api/v2/pokemon/${numPk}`;
    
    let conexion = await fetch(url);
    let captacion = await conexion.json();

    let {sprites} = captacion;
    let {abilities, abilities: {ability}} = captacion

    console.log(captacion.name);
    console.log(sprites);
    
    console.log("Habilidades: ");
    abilities.forEach(element => {
        console.log(element.ability.name);
    });
}
ComsumoX(5);