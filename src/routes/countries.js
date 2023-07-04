const { Router } = require("express");
const {getCountries,getCountryID} = require("../handlers");

const countriesRouter = Router();

countriesRouter.get ('/' , getCountries);
countriesRouter.get ('/:idPais' ,getCountryID);

module.exports = countriesRouter ;