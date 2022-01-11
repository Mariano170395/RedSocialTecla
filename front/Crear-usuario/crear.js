let registroUser = async () => {
  const user = {
    nombres_usuario: document.getElementById("nombreDatos").value,
    correo_usuario: document.getElementById("emailDatos").value,
    contrasena_usuario: document.getElementById("passDatos").value,
    pais: document.getElementById("paisDatos").value,
    hobby_usuario: document.getElementById("hobbyDatos").value,
    puesto_usuario: document.getElementById("puestoDatos").value,
    imagen_usuario: document.getElementById("fotoDatos").value,
  };

  console.log(user)

  let res = await fetch("http://localhost:3000/usuario", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  let resjson = await res.json();

  console.log(resjson);
  alert('El usuario se ha creado satisfactoriamente!')

  window.location.href = '../Login/login.html'
};

