const express = require("express");
const { countriesRouter, activitiesRouter,administradorRouter } = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use('/activities', activitiesRouter);
server.use('/countries', countriesRouter);
server.use('/administrador', administradorRouter)
server.get("/", (req, res) => {
    res.status(200).send("Bienvenido...");
})
//prueba
module.exports = server;
