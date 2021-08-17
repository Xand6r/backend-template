const getServices = () => {
    return [
        {
            name: 'statusService',
            service: require('./status')
        }
    ]
}

module.exports = getServices;