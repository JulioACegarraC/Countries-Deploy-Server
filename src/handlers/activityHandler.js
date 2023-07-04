const {activityPoster,activitiesgetter,countriesWhitActivityGetter} = require("../controllers");

const getAllActivities = async (req,res) => {
    try {
        const response = await activitiesgetter();
        if(response.length === 0) return res.status(404).json({error:"No cuenta con actividades registradas aun"})
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({error:error.message});        
    }    
};
const getCountriesByActivity = async (req,res) => {
    try {
        const {ActivityId} = req.params;
        const response = await countriesWhitActivityGetter(ActivityId);
        if(response.length === 0) return res.status(404).json({error:"No cuenta con actividades registradas aun"})
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({error:error.message});        
    }    
};

const postActivity = async (req,res) => {
    try {
        const { name, dificulty, duration, season, CountryId } = req.body;
        const response = await activityPoster(name, dificulty, duration, season, CountryId);
        if (typeof response === 'string') return res.status(400).json({error:response});
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({error:error.message}); 
    }
}
module.exports = {getAllActivities,postActivity,getCountriesByActivity}