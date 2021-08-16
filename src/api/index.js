import { Router } from "express";
import statusRoute from "./routes/status";

export default () => {
    const app = Router();
    //initialie thee required routes
    statusRoute(app);

    // return an instance of our routes
    return app;
};
