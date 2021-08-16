const { Container } = require("typedi");
const getModels = require("../models");
const LoggerInstance = require("./logger");

const dependencyInjector = async () => {
    const models = getModels();
    LoggerInstance.info("✌️   Loading Mongo DB Mpdels");
    models.forEach((m) => {
        LoggerInstance.info("   --  ✔️  Loading Mongo DB Model: %s", m.name);
        Container.set(m.name, m.model);
    });
    LoggerInstance.info("✔️   All Mongo DB Models loaded!");

    Container.set("logger", LoggerInstance);
    LoggerInstance.info("✔️   Logger Injected");
};

module.exports = dependencyInjector;
