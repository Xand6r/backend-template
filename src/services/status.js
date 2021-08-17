const { Container } = require("typedi");

class StatusService {
    constructor() {}

    checkStatus() {
        return "working";
    }
}

module.exports = StatusService