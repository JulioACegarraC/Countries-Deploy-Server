const{ Country} = require('../db');
const {activitiesForCountryGetter} = require("../utils")

module.exports = async (idPais) => {
    try {
        const pais = await Country.findByPk(idPais);
        if (!pais) throw Error('El Id ingresado no coincide con ningun país');
        const activities = await activitiesForCountryGetter(idPais);
        return ({...pais.dataValues,activities});
    } catch (error) {
        return error.message;        
    }
};