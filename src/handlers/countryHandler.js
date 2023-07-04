const {countriesGetter,countryIdGetter} = require("../controllers");

const getCountries = async (req,res) => {
    const {name} = req.query;
    try {
        const response = await countriesGetter();
        if (name === undefined) {
            if (typeof response === 'string') return res.status(400).json({error:response});
            return res.status(200).json(response);
        }
        if (typeof name === 'string' && name.length === 0) return res.status(400).json({error:'Falta ingresar el nombre del pais'})
        else {
            const nameLowerCase = name.toLowerCase();
            const filtered = response.filter( ele => ele.name.toLowerCase().includes(nameLowerCase))
            if (filtered.length !==0) return res.status(200).json(filtered);
            else return res.status(400).json({error:`No se encontró ningun país con el nombre ${name}`})
        }
    } catch (error) {
        return res.status(404).json({error:error.message});        
    }    
};
const getCountryID = async (req,res) => {
    const { idPais } = req.params
    try {
        const response = await countryIdGetter(idPais);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({error:error.message});        
    }
};
module.exports = {getCountries,getCountryID}