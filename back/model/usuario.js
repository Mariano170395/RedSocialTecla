const sequelize = require("../db/conexion");

let list = async () => {
  let result = await sequelize.query("SELECT * FROM crear_usuario");
  let result0 = result[0];
  return result0;
};

let add = async (usuario) => {
  await sequelize.query(
    `INSERT INTO crear_usuario ( user_id nombres_usuario, correo_usuario, contrasena_usuario, pais, imagen_usuario) VALUES ('${usuario.nombres_usuario}', '${usuario.apellidos_usuario}', '${usuario.correo_usuario}', '${usuario.contrasena_usuario}', '${usuario.pais}', '${usuario.imagen_usuario}')`
  );
};

let updateName = async (usuario) => {
  await sequelize.query(
    `UPDATE crear_usuario SET nombres_usuario = '${usuario.nombres_usuario}' WHERE user_id = '${usuario.user_id}'`
  );
};

let updateMail = async (usuario) => {
  await sequelize.query(
    `UPDATE crear_usuario SET correo_usuario = '${usuario.correo_usuario}' WHERE user_id = '${usuario.user_id}'`
  );
};

let updatePassword = async (usuario) => {
  await sequelize.query(
    `UPDATE crear_usuario SET correo_usuario = '${usuario.contrasena_usuario}' WHERE user_id = '${usuario.user_id}'`
  );
};

let updatePais = async (usuario) => {
  await sequelize.query(
    `UPDATE crear_usuario SET pais = '${usuario.pais}' WHERE user_id = '${usuario.user_id}'`
  );
};

let updateImagen = async (usuario) => {
  await sequelize.query(
    `UPDATE crear_usuario SET imagen_usuario = '${usuario.imagen_usuario}' WHERE user_id = '${usuario.user_id}'`
  );
};

let login = async (usuario) => {
  await sequelize.query(
    `SELECT correo_usuario && contrasena_usuario FROM crear_usuario`
  );
};

module.exports.list = list;
module.exports.add = add;
module.exports.updateNam = updateName;
module.exports.updateMai = updateMail;
module.exports.updatePass = updatePassword;
module.exports.updatePai = updatePais;
module.exports.updateImg = updateImagen;
