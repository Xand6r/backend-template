const dependencyInjector = require("./dependency");
const expressLoader = require("./express");
const LoggerInstance = require("./logger");
const mongooseLoader = require("./mongoose");

module.exports = async ({ expressApp }) => {
    LoggerInstance.info("✌️   Connecting to Database");
    await mongooseLoader();
    await dependencyInjector();
    LoggerInstance.info("✌️   All Dependencies injected");
    await expressLoader({ app: expressApp });
    LoggerInstance.info("✌️   Express Loaded");
};
