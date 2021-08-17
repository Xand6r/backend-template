const mongoose = require("mongoose");
const config = require("../config");
const LoggerInstance = require("./logger");


const mongooseLoader =  () => {
    return mongoose.connect(config.databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((connection) => {
        return connection.connection.db;
    }).catch((err) => {
        LoggerInstance.error(`🔥${err.message}🔥`);
    })
};

module.exports = mongooseLoader;
