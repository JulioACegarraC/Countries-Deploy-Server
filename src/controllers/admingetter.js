const{ Administradores } = require('../db');

module.exports = async () => {
        const administardores = await Administradores.findAll();
        return administardores
};