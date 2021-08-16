const dotenv = require("dotenv");

dotenv.config();

const config = {
    /**
     * Current environment
     */
    environment: process.env.NODE_ENV,

    /**
     * Your favourite port
    */
   port: parseInt(process.env.PORT, 10)
};

module.exports = config;