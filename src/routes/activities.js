const { Router } = require("express");
const { getAllActivities,postActivity,getCountriesByActivity } = require ("../handlers")

const activitiesRouter = Router();
activitiesRouter.get ('/' , getAllActivities);
activitiesRouter.get ('/:ActivityId' , getCountriesByActivity);
activitiesRouter.post ('/' , postActivity);

module.exports = activitiesRouter ;