const mongoose = require('./connection');
const Schema = mongoose.Schema
const liftingSchema = new Schema({
    date: Date,
    musclegroup: String,
    lift: String,
    sets: [{
      reps: Number,
      pounds: Number
    }]  
});
module.exports = mongoose.model('Lifting', liftingSchema)