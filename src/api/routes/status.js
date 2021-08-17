const { Router } = require("express");
const {Container} = require("typedi");
const { StatusService } = require("../../services/status");
const { celebrate, joi } = require("celebrate");

const route = Router();
const ROUTE_NAME = "/status";

const statusRoute = (app) => {
    // define the top level router
    app.use(ROUTE_NAME, route);

    // add a testing route
    route.get('/test', (req, res) => {
        const statusService = Container.get('StatusService');
        const message = statusService.checkStatus();
        res.send(message);
    })
}

module.exports = statusRoute;