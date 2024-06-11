let url = 'https://rickandmortyapi.com/api/character/' //variable donde hacemos referencia al origen de los datos
fetch(url) //solicitud a la url (promesa)
    .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json)
    .then(data => mostrarData(data.results)) //llamamos a la función mostrardata()
    .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch

const mostrarData = (data) => {
    console.log(data)

    let miMain = `<div class="contenedor">`;

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
        miMain += `
        <div class="tarjeta">
            <img src="${data[i].image}" alt="foto">
                <div class="textocard">
                    <h2>${data[i].name}</h2>
                    <p>${data[i].species}</p>
                    <p>${data[i].gender}</p>
                    <p>${data[i].origin["name"]}</p>
                    <button onclick="GuadarLocalStorage(${data[i].name})">Agregar Carrito</button>
                </div>
        </div>
         `
    }


    miMain += `</div>`; // Cierra el div contenedor

    document.querySelector("main").innerHTML = miMain
}



/*
let url = 'https://pokeapi.co/api/v2/pokemon/ditto' //variable donde hacemos referencia al origen de los datos
fetch(url) //solicitud a la url (promesa)
    .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json)
    .then(data => mostrarData(data)) //llamamos a la función mostrardata()
    .catch(error => console.log("Ocurrió un error", error)); // si hay un error será atrapado por catch

const mostrarData = (data) => {
    console.log(data);
    let miMain = '';

    for (let i = 0; i < data.abilities.length; i++) {
        console.log(data.abilities[i].ability.name)

        miMain += `
                <p> ${data.abilities[i].ability.name} </p>
        `
    }

    document.querySelector("main").innerHTML = miMain;

}
*/

/*
const mostrarData = (data) => {
    console.log(data);
    let miMain = '';

    // La API de Pokémon devuelve un objeto con una propiedad "abilities" que es un array
    // Así que debes iterar sobre el array para acceder a las habilidades.
    for (let i = 0; i < data.abilities.length; i++) {
        const abilityName = data.abilities[i].ability.name;
        miMain += `<p>${abilityName}</p>`;
    }

    document.querySelector("main").innerHTML = miMain;
}
*/