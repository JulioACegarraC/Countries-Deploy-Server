const{ Country } = require('../db');

module.exports = async () => {
    try {
        const countries = await Country.findAll();
        if (countries.length === 0) throw Error ('No se ha cargado la base de Datos');
        return countries;
    } catch (error) {
        return error.message
    }
};