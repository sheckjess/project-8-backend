const express = require('express')
const cors = require('cors')

const Cardio = require('../models/cardio.model')

router = express()
router.use(express.json())
router.use(cors())
router.set('json spaces', 4)

//GETS -----------------------------
router.get('/', (req,res) => {
  Cardio.find({})
      .then((data)=> {
          res.json(data);
      })
})

//POSTS ----------------------------
router.post('/add', (req,res) => {
  var newCardio = Cardio(req.body)
  newCardio.save().then(()=> res.send("complete"))
})

//PUTS -----------------------------


//DELETES --------------------------

module.exports = router