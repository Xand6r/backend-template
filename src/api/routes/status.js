import { Router } from "express";
import Container from "typedi";
import { StatusService } from "../../services/status";
import { celebrate, joi } from "celebrate";

const route = Router();
const ROUTE_NAME = "/status";

export default(app) => {
    // define the top level router
    app.use(ROUTE_NAME, route);

    // add a testing route
    route.get('/', (req, res) => {
        const message = Container.get(StatusService);
        res.send(message);
    })
}