const{ Administradores } = require('../db');

module.exports = async (Email,Password) => {
    try {
        const newAdmin = await Administradores.create({Email,Password});
        return newAdmin;
     } catch (error) {
        return error.message
    }
};