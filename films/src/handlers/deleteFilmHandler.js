const controllers = require("../controllers")

module.exports = async (req, res) => {
    return result = await controllers.deleteFilmController(req, res);
}