const{ Country_Activity } = require('../db');

module.exports = async (id) => {
    try {
        const country_Activity = await Country_Activity.findAll({where: {ActivityId:id}});
        if (!country_Activity) throw Error('La Actividad solicitada no esta habilitada dentro de los paises buscados');
        return country_Activity
    } catch (error) {
        return error.message;
    }
};