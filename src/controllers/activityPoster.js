const{ Activity,Country_Activity } = require('../db');

module.exports = async (name, dificulty, duration, season, CountryId) => {
    let id='';
    try {
        if (!CountryId) return Error('Es necesario que se indique el Id de al menos 1 país');
        const newActivity = await Activity.create({name,dificulty,duration,season});
        id=newActivity.id
        for ( let i = 0 ; i < CountryId.length ; i++){
            await Country_Activity.create({CountryId:CountryId[i],ActivityId:newActivity.id,ActivityName:newActivity.name})
        }
        return newActivity;
     } catch (error) {
        await Activity.destroy({
            where: {
                id:id
            }
        })
        return error.message
    }
};