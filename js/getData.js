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
    html += '<div class="col-6 col-sm-6 col-md-4 col-lg-3">';
    html += '<div class="card text-white bg-dark mb-5" style="width: 12rem;">';
    html += `<img src="${personaje.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${personaje.name}</h5>`;
    html += `<p class="card-text">${personaje.status}</p>`;
    html += `<p class="card-text">${personaje.species}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });

  document.getElementById("datosPersonajes").innerHTML = html;
};

getData(API);
