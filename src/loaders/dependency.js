const { Container } = require("typedi");
const getModels = require("../models");
const getServices = require("../services");
const LoggerInstance = require("./logger");

const dependencyInjector = async () => {
    const models = getModels();
    LoggerInstance.info("✌️   Loading Mongo DB Mpdels");
    models.forEach((m) => {
        LoggerInstance.info("   --  ✔️  Loading Mongo DB Model: %s", m.name);
        Container.set(m.name, m.model);
    });

    const services = getServices();
    LoggerInstance.info("✌️   Loading Service Instances");
    services.forEach((s) => {
        LoggerInstance.info("   --  ✔️  Loading Service: %s", s.name);
        const serviceInstance = new s.service();
        Container.set(s.name, serviceInstance);
    });

    Container.set("logger", LoggerInstance);
    LoggerInstance.info("✔️   Logger Injected");
};

module.exports = dependencyInjector;
