const {getCountries,getCountryID} = require("./countryHandler");
const {getAllActivities,postActivity,getCountriesByActivity} = require("./activityHandler");
const {getAllAdministradores,postAdministrador} = require("./administradorHandler");

module.exports = { getAllActivities,postActivity, getCountries,getCountryID,getCountriesByActivity,getAllAdministradores,postAdministrador };