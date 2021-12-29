const url = 'https://fakestoreapi.com/products/';
let resultado;

let getProducto = (id) =>{
    let urlId = url + id

    fetch(urlId)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            resultado = json
        })
        .catch(error =>{
            console.log('No0o0o0o0o0')
        })
}

getProducto(2)
console.log(resultado)