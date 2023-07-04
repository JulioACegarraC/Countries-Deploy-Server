const {admindGetter,adminPoster} = require("../controllers");

const getAllAdministradores = async (req,res) => {
    try {
        const response = await admindGetter();
        if(response.length === 0) return res.status(404).json({error:"No cuenta con administradores aun"})
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({error:error.message});        
    }    
};
const postAdministrador = async (req,res) => {
    try {
        const { Email, Password } = req.body;
        const response = await adminPoster(Email,Password);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({error:error.message}); 
    }
}

module.exports = {getAllAdministradores,postAdministrador}