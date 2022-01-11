
let login = async () => {

  const user = {
    correo_usuario: document.getElementById("emailDatos").value,
    contrasena_usuario: document.getElementById("passDatos").value,
  };

  const claves = Object.keys(user);
  let errors = [];
  for (let clave of claves) {
    if (user[clave] === "") {
      errors.push(clave);
    }
  }

  if (errors.length > 0) {
    alert(`Falta completar ${errors}`);
  } else {
    try {
      let response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      let resjson = await response.json();

      if (
        resjson[0].correo_usuario == user.correo_usuario &&
        resjson[0].contrasena_usuario == user.contrasena_usuario
      ) {
        let userData = JSON.stringify(resjson)
        localStorage.setItem('userData', userData)
        window.location.href = `../Feed/Ejercicio-14/feed.html`;
      }
    } catch (error) {
      alert("los datos introducidos fueron incorrectos");
    }
  }
};
