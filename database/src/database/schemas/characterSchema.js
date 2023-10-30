const { Schema } = require('mongoose');

const characterSchema = new Schema({
    _id: String ,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: [{String, ref:'Planet'}],
    films: [{String, ref: 'Film'}]
});

module.exports = characterSchema;