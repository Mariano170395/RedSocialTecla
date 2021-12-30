// export function registroDeUsuario(){

//     const user={
//         nombre: document.getElementById('nombres').value,
//         apellido: document.getElementById('nombres').value,
//         email: document.getElementById('email').value,
//         contraseña: document.getElementById('contraseña').value,
//         fecha_nac: document.getElementById('fecha_nac').value,
//     }
//     const claves = Object.keys(user)
//     let errors = []
//     for (let clave of claves){
//         if(user[clave]===''){
//             errors.push(clave)
//         }
//     }
//     if(errors.length>0){
//         alert(`Falta completar ${errors}`)
//     }else{
//         fetch('https://localhost:3001/usuarios',{
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(user)
//         })
//         .then(resp=>resp.json())
//         //{error: e.message}
//         .then(response=>{
//             if(response.error){
//                 alert(response.error)
//             }else{
//                 window.location('/index')
//             }
//         })
//     }
// }

let registroUser = () => {
  const user = {
    nombres_usuario: document.getElementById("nombreDatos").value,
    correo_usuario: document.getElementById("emailDatos").value,
    contrasena_usuario: document.getElementById("passDatos").value,
    pais: document.getElementById("paisDatos").value,
    hobby_usuario: document.getElementById("hobbyDatos").value,
    puesto_usuario: document.getElementById("puestoDatos").value,
    imagen_usuario: document.getElementById("fotoDatos").value,
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
    fetch("https://localhost:3000/usuario", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          window.location("/index");
        }
      });
  }
};
