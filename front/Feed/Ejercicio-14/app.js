const url = "https://randomuser.me/api/";

const getDatos = async () => {
  try {
    let userParse = JSON.parse(localStorage.getItem('userData'))
    console.log(userParse)
    
    //Saludo
    let saludo = '<h1 class="NombreSaludo"></h1>'
    saludo += `<a href ="../../Perfil/perfil.html" class="Hola"><h1 class="NombreSaludo">${userParse[0].nombres_usuario}</h1></a>`
    document.getElementById('saludoPerfil').innerHTML = saludo
    //Fetch
    const respuesta = await fetch(url);
    const post = await respuesta.json();
    //Nombre
    let nombre = '<h1 class="Nombre"></h1>';
    nombre += `<h1 class="Nombre">${post.results[0].name.first} ${post.results[0].name.last}</h1>`;
    document.getElementById("Nombre").innerHTML = nombre;
    //Imagen
    let imagen = "<img></img>";
    imagen += `<img class="fotoPerfil" src=${post.results[0].picture.medium} alt="Perfil"></img>`;
    document.getElementById("ImagenPerfil1").innerHTML = imagen;
    //Edad
    let edad = "<h1></h1>";
    edad += `<h1 class='Edad'>Edad: ${post.results[0].registered.age + 20} años</h1>`;
    document.getElementById("Edad").innerHTML = edad;
    //Ubicacion
    let ubicacion = "<h1></h1>";
    ubicacion += `<h1 class='Ubicacion'>Ubicación: ${post.results[0].location.city}, ${post.results[0].location.country}</h1>`;
    document.getElementById("Ubicacion").innerHTML = ubicacion;
  } catch (error) {
    console.log("algo salio mal");
  }
};

getDatos();


//Boton Comentarios
let resultadoComent = 1;
const OcultarComentario = () => {
  if (resultadoComent == 0) {
    document.getElementById("Comentario").style.display = "block";
    resultadoComent = 1;
  } else {
    document.getElementById("Comentario").style.display = "none";
    resultadoComent = 0;
  }
};


let cerrarSesion =()=>{
  console.log('Hola')
  localStorage.clear()
}