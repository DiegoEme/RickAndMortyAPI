//Obtenemos la api por medio de promesas

/** 
fetch()
permite controlar errores
trabaja por medio de https y se basa en promesas
sistema de peticiones y respuestas
**/

const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json);
      console.log("json ->", json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

//llenar datos en nuestra pagina

const llenarDatos = (datos) => {
  let html = "";
  datos.results.forEach((personaje) => {
    html += "<div class='col'>";
    html += '<div class="card" style="width: 18rem;>';
    html += `<img class="    card-img-top" src="${personaje.image}">`;
    html += `<div class="card-body">`;
    html += `<h5 class="card-title">${personaje.name}</h5>`;
    html += `<p class="card-text">${personaje.status}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });

  document.getElementById("datosPersonajes").innerHTML = html;
};

getData(API);
