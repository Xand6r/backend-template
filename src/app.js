const express = require('express');

const loaders = require('./loaders');
const config = require('./config');

async function startServer() {
    const app = express();
    await loaders({ expressApp: app });

    app.listen(config.port, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`🔥 server is ready on port ${config.port} 🔥`)
    });
};

startServer();