const controllers = require("../controllers");

module.exports = async(req, res) => {
    return result = await controllers.updateCharacterController(req, res);
}