

let login = async () => {
  const respuesta = await fetch("http://localhost:3000/usuario/");
  let respuestajson = await respuesta.json();
  let hola;

  for (let i = 0; i < respuestajson.length; i++) {
    let respuestaUser = respuestajson[i].nombres_usuario;
    let respuestaPass = respuestajson[i].contrasena_usuario;

    if (respuestaUser == document.getElementById("User").value && respuestaPass == document.getElementById('Pass').value ) {
      hola = "Bienvenido!";
      window.location.href = '../Feed/Ejercicio-14/feed.html'
    } else {
        hola = 'Tu correo o tu password es incorrecto'
        window.location.href = '../Feed/Ejercicio-14/feed.html'
    }
  }

  alert(hola);
};
