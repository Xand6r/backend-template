const { Router } = require("express");
const  statusRoute = require("./routes/status");

const Routes = () => {
    const app = Router();
    //initialie thee required routes
    statusRoute(app);

    // return an instance of our routes
    return app;
};

module.exports = Routes;