const getUser = async () => {
  let userParse = JSON.parse(localStorage.getItem("userData"));
  console.log(userParse[0]);

  //Insertar Datos en Perfil
  //Saludo
  let saludo = '<h1 class="NombreSaludo"></h1>';
  saludo += `<a href ="../../Perfil/perfil.html" class="Hola"><h1 class="NombreSaludo">${userParse[0].nombres_usuario}</h1></a>`;
  document.getElementById("saludoPerfil").innerHTML = saludo;

  //Nombre
  let nombre = '<h1 class="Nombre"></h1>';
  nombre += `<h1 class="Nombre">${userParse[0].nombres_usuario}</h1>`;
  document.getElementById("divNombre").innerHTML = nombre;

  let imagen = '<h1 class="ImagenPerfil"></h1>';
  imagen += `<img class="ImagenPerfil" src='${userParse[0].imagen_usuario}'></img>`;
  document.getElementById("divImg").innerHTML = imagen;

  let correo = '<h1 class="CorreoPerfil"></h1>';
  correo += `<h1 class="CorreoPerfil">Mail: ${userParse[0].correo_usuario}</h1>`;
  document.getElementById("divCorreo").innerHTML = correo;

  let pais = '<h1 class="DatosPerfil"></h1>';
  pais += `<h1 class="CorreoPerfil">Pais: ${userParse[0].pais}</h1>`;
  document.getElementById("divPais").innerHTML = pais;

  let hobby = '<h1 class="DatosPerfil"></h1>';
  hobby += `<h1 class="CorreoPerfil">Hobby: ${userParse[0].hobby_usuario}</h1>`;
  document.getElementById("divHobby").innerHTML = hobby;

  let puesto = '<h1 class="DatosPerfil"></h1>';
  puesto += `<h1 class="CorreoPerfil">Puesto: ${userParse[0].puesto_usuario}</h1>`;
  document.getElementById("divPuesto").innerHTML = puesto;
};

getUser();

let cerrarSesion =()=>{
  console.log('Hola')
  localStorage.clear()
}