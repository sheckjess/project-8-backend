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

router.get('/specific/:id', (req,res) => {
  Cardio.findById(req.params.id)
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
router.put('/update/:id', (req,res) => {
  console.log(req.params.id)
  Cardio.findByIdAndUpdate(req.params.id, req.body)
    .then(()=> {
      res.send('Updated cardio event.')
    })
})

//DELETES --------------------------
router.delete('/delete/:id', (req,res) => {
  console.log(req.params.id)
  Cardio.findByIdAndDelete(req.params.id)
    .then(()=> {
      res.send('Deleted cardio event.')
    })
})


module.exports = router