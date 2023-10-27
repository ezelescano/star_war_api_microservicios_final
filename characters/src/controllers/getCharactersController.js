const Characters = require('../data');
const { response} =  require('../utils');

module.exports =    async (req, res) => {
   const characters = await Characters.list();//utiliza characters como si fuera un modelo mas
    response(res, 200, characters);
}
 