const getModels = () => {
    return [
        {
            name: require('./sample').modelName,
            model: require('./sample')
        }
    ]
}

module.exports = getModels;