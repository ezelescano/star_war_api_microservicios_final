const { catchedAsync } = require('../utils')

module.exports = {
    getCharactersController: catchedAsync(require('./getCharactersController')),
    createCharacterController: catchedAsync(require('./createCharacterController')),
    deleteCharacterController: catchedAsync(require('./deleteCharacterController')),
    updateCharacterController: catchedAsync(require('./updateCharacterController'))
};