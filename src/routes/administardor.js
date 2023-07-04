const { Router } = require("express");
const { getAllAdministradores,postAdministrador } = require ("../handlers")

const administradorRouter = Router();
administradorRouter.get ('/' , getAllAdministradores);
administradorRouter.post ('/' , postAdministrador);

module.exports = administradorRouter ;