const { Country_Activity, Activity } = require('../db');
module.exports = async (idPais) => {
    //? allActivities es un array
    const allActivitiesForCountry = await Country_Activity.findAll({where: {CountryId:idPais}});
    let activities = [];
    if (allActivitiesForCountry){
        for (let i = 0 ; i < allActivitiesForCountry.length ; i++){
            const data = (await Activity.findByPk(allActivitiesForCountry[i].dataValues.ActivityId.toString())).dataValues;
            activities.push(data)
        }
    }
    return activities;
};