const characters = require('./characters.json');

module.exports = {
    list: async () => {//es una funcion que solo muestra el json, pero simula que es un modelo
        return characters;
    },
}