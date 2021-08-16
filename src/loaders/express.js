var path = require("path");
const cors = require('cors');
var logger = require("morgan");
var express = require("express");
var createError = require("http-errors");
var cookieParser = require("cookie-parser");

module.exports = async ({ app }) => {
    // view engine setup
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "jade");

    app.use(logger("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, "public")));
    app.use(cors());

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get("env") === "development" ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.send("error");
    });

    return app;
};