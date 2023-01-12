const express = require('express');
require('dotenv').config();

const webApp = express();

const { PORT } = process.env;

webApp.use(express.urlencoded({ extended: true }));
webApp.use(express.json());
webApp.use((req, res, next) => {
    console.log(`Path ${req.path} with Method ${req.method}`);
    next();
});

const homeRoute = require('./routes/dialogflow_route');
const dialogflowRoute = require('./routes/dialogflow_route');

webApp.use(homeRoute.router);
webApp.use(dialogflowRoute.router);

webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});