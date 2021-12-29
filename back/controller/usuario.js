const juegoModel = require("../model/usuario");

module.exports.listGames = async () => {
  let result = await juegoModel.list();
  return result;
};

module.exports.addGame = async (game) => {
  await juegoModel.add(game);
  return "Siuuuuu";
};

module.exports.updatearNombre = async (user) => {
  await juegoModel.updateNam(user);
  return "Bien!";
};

module.exports.updatearMail = async (user) => {
  await juegoModel.updateMai(user);
  return "Bien!";
};
module.exports.updatearPass = async (user) => {
  await juegoModel.updatePass(user);
  return "Bien!";
};
module.exports.updatearPais = async (user) => {
  await juegoModel.updatePai(user);
  return "Bien!";
};

module.exports.updatearImagen = async (user) => {
  await juegoModel.updateImg(user);
  return "Bien!";
};

module.exports.getPass = async (user) => {
  let pass = await juegoModel.login(user);
  return pass;
};
