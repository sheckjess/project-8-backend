const mongoose = require('./connection');
const Schema = mongoose.Schema
const cardioSchema = new Schema({
    date: Date,
    type: String,
    minutes: Number,
    miles: Number,
    calories: Number    
});
module.exports = mongoose.model('Cardio', cardioSchema)