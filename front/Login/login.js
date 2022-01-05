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
    let response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let resjson = await response.json();
    console.log(resjson);
    return resjson
    .then(
      (window.location.href = `../Feed/Ejercicio-14/feed.html`)
    );
  }
};
