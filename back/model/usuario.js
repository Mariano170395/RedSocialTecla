const sequelize = require("../db/conexion");
const usuario = require("../view/usuario");



let list = async () => {
  let result = await sequelize.query("SELECT * FROM crear_usuario");
  let result0 = result[0];
  return result0;
};

//SELECT * from USERS where password=req.body.password and username=req.body.username
//Res con los datos del usuario
//fetch con los datos del usuario

let login = async (usuario)=>{
  let result = await sequelize.query(`SELECT * FROM crear_usuario WHERE contrasena_usuario= '${usuario.contrasena_usuario}'`)
}

let add = async (usuario) => {
  await sequelize.query(
    `INSERT INTO crear_usuario ( nombres_usuario, correo_usuario, contrasena_usuario, pais, imagen_usuario, hobby_usuario, puesto_usuario) VALUES ('${usuario.nombres_usuario}', '${usuario.correo_usuario}', '${usuario.contrasena_usuario}', '${usuario.pais}', '${usuario.imagen_usuario}', '${usuario.hobby_usuario}',  '${usuario.puesto_usuario}')`
  );
};

let addPst = async (pst) =>{
  await sequelize.query(
    `INSERT INTO crear_post ( titulo_post ) VALUES ('${pst.titulo_post}')`
  )
}


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


module.exports.list = list;
module.exports.add = add;
module.exports.addPost = addPst;
module.exports.updateNam = updateName;
module.exports.updateMai = updateMail;
module.exports.updatePass = updatePassword;
module.exports.updatePai = updatePais;
module.exports.updateImg = updateImagen;
module.exports.loginUser = login;

