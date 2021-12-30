const gameController = require("../controller/usuario");

module.exports = (app) => {
  //listar todos los users
  app.get("/usuario", async (req, res) => {
    let result = await gameController.listGames();
    res.json(result);
  });

  //listar por id
  app.get("/usuario/:id", async (req, res) => {
    const { id } = req.params;
    let result = await gameController.listGames();
    let resultFilt = result.find((e) => e.user_id == id);
    res.json(resultFilt);
  });

  //Agregar usuario
  app.post("/usuario", async (req, res) => {
    let juego = req.body;
    console.log(juego);
    let result = await gameController.addGame(juego);
    res.json(result);
  });

  //Agregar un post
  app.post("/post", async (req, res) => {
    let post = req.body;
    console.log(post);
    let result = await gameController.addPt(post);
    res.json(result);
  });

  //Modificar Nombres
  app.put("/usuario/nombre/:id", async (req, res) => {
    const nuevosNombres = req.body;
    let updateName = await gameController.updatearNombre(nuevosNombres);
    res.json(updateName);
  });

  //Modificar Mail
  app.put("/usuario/mail/:id", async (req, res) => {
    const nuevoMail = req.body;
    let updateMail = await gameController.updatearMail(nuevoMail);
    res.json(updateMail);
  });

  //Modificar Pass
  app.put("/usuario/pass/:id", async (req, res) => {
    const nuevoPass = req.body;
    let updatePass = await gameController.updatearPass(nuevoPass);
    res.json(updatePass);
  });

  //Modificar Pais
  app.put("/usuario/pais/:id", async (req, res) => {
    const nuevoPais = req.body;
    let updatePais = await gameController.updatearPais(nuevoPais);
    res.json(updatePais);
  });

  //Modificar Imagen
  app.put("/usuario/imagen/:id", async (req, res) => {
    const nuevaImg = req.body;
    let updateImagen = await gameController.updatearImagen(nuevaImg);
    res.json(updateImagen);
  });
};
