const PLanets = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const planets = await PLanets.list()
    response(res, 200, planets);
}