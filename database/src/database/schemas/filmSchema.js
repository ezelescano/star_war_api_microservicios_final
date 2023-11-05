const {Schema} = require('mongoose');

const filmSchema = new Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    characters: [{String, ref: 'Character'}],
    planets: [{String, ref: 'Planet'}]
});

module.exports= filmSchema;
