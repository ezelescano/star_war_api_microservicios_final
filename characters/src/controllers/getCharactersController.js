const Characters = require('../data')
module.exports =    async (req, res) => {
   const characters = await Characters.list();//utiliza characters como si fuera un modelo mas
    res.status(200).json(characters);
}
