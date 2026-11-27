window.onload = () => {
    let botonBuscar = document.getElementById("search-btn");
    botonBuscar.onclick = onClickBuscar;
}

function buscarPokemon(nombreNum, callback) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombreNum}`, {
        method: "GET",
        headers: {
            'content-type': 'aplication/json'
        }
    }).then(response => response.json())
        .then(pokemon => callback(pokemon))
        .catch(error => {
            let mensajeError = document.createElement("p")
            mensajeError.innerText = "No se puede obtener el pokemón"
            document.body.appendChild(mensajeError)
        })
}

function onClickBuscar(evento) {
    let buscador = document.getElementsByName("buscador")[0];
    let textoABuscar = buscador.value.trim();
    if (textoABuscar.trim() !== "") {
        buscarPokemon(textoABuscar, mostrarPokemon);
    }
}

function mostrarPokemon(pokemon) {
    let nombrePokemonElement = document.getElementsByTagName("h2")[0];
    let imgPokemonElement = document.getElementsByTagName("img")[0];
    let dataPokemonElement = document.getElementById("pokemon-data");

    nombrePokemonElement.innerText = pokemon.name;
    imgPokemonElement.src = pokemon.sprites.front_default === null ? "https://placehold.co/600x400" : pokemon.sprites.front_default;
    dataPokemonElement.innerHTML =
        `<div class='data'>Altura:<span></span>${pokemon.height}</div>` +
        `<div class='data'>Peso:<span></span>${pokemon.weight}</div>` +
        `<div class='data'>Altura:<span></span>${pokemon.height}</div>`
}