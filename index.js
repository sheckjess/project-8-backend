const express = require("express");
const path = require('path');
const cors = require('cors')
const dotenv = require('dotenv').config()

//Middleware and MW settings
const app = express();
app.use(express.json());
//app.use(cors())
app.set("json spaces", 4);

app.get('/', (req, res) => {
  res.redirect('/documentation')
})

app.get("/documentation", (req, res) => {
  res.sendFile(path.join(__dirname + '/documentation.html'), (err)=> {
    if (err) console.log(err);
  });
});

app.use("/cardio", require("./routes/cardioRoutes"));
app.use("/lifting", require("./routes/liftingRoutes"));

app.set("port", process.env.PORT || 6000);

app.listen(app.get('port'), () => {
  console.log(`Listening on Port ${app.get('port')}`);
});