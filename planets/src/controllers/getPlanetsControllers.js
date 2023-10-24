const PLanets = require('../data');
module.exports = async (req, res) => {
    const planets = await PLanets.list()
    res.status(200).json(planets);
}