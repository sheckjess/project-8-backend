const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

let mongoURI = process.env.ATLAS_URI;

mongoose
  .connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(instance =>
    console.log(`Connected to db`)
  )
  .catch(err => console.log("Connection Failed.", err));

module.exports = mongoose;