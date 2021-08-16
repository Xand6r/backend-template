const dependencyInjector = require("./dependency");
const expressLoader = require("./express");
const LoggerInstance = require("./logger");
// import mongooseLoader from "./mongoose";

module.exports = async ({ expressApp }) => {
    // const mongooseConnection = await mongooseLoader();
    // LoggerInstance.info("✌️ Database Loaded");
    await dependencyInjector();
    LoggerInstance.info("✌️ Dependencies injected");
    await expressLoader({ app: expressApp });
    LoggerInstance.info("✌️ Express Loaded");
};
