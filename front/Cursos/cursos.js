
let userParse = JSON.parse(localStorage.getItem('userData'))
console.log(userParse[0])

let saludo = '<h1 class="NombreSaludo"></h1>'
saludo += `<a href ="../../Perfil/perfil.html" class="Hola"><h1 class="NombreSaludo">${userParse[0].nombres_usuario}</h1></a>`
document.getElementById('saludoPerfil').innerHTML = saludo

let cerrarSesion =()=>{
    localStorage.clear()
}

