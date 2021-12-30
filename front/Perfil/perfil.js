const getUser = async () => {
  const respuesta = await fetch("http://localhost:3000/usuario/11");
  const post = await respuesta.json()
  //Insertar Datos en Perfil
  //Nombre
  let nombre = '<h1 class="Nombre"></h1>';
  nombre += `<h1 class="Nombre">${post.nombres_usuario}</h1>`;
  document.getElementById("divNombre").innerHTML = nombre;

  let imagen = '<h1 class="ImagenPerfil"></h1>';
  imagen += `<img class="ImagenPerfil" src='${post.imagen_usuario}'></img>`;
  document.getElementById("divImg").innerHTML = imagen;

  let correo = '<h1 class="CorreoPerfil"></h1>';
  correo += `<h1 class="CorreoPerfil">Mail: ${post.correo_usuario}</h1>`;
  document.getElementById("divCorreo").innerHTML = correo;

  let pais = '<h1 class="DatosPerfil"></h1>';
  pais += `<h1 class="CorreoPerfil">Pais: ${post.pais}</h1>`;
  document.getElementById("divPais").innerHTML = pais;

  let hobby = '<h1 class="DatosPerfil"></h1>';
  hobby += `<h1 class="CorreoPerfil">Hobby: ${post.hobby_usuario}</h1>`;
  document.getElementById("divHobby").innerHTML = hobby;

  let puesto = '<h1 class="DatosPerfil"></h1>';
  puesto += `<h1 class="CorreoPerfil">Puesto: ${post.puesto_usuario}</h1>`;
  document.getElementById("divPuesto").innerHTML = puesto;
};

getUser();
