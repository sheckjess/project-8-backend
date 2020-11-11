const express = require('express')
const cors = require('cors')

const Lifting = require('../models/lifting.model')

router = express()
router.use(express.json())
router.use(cors())
router.set('json spaces', 4)

//GETS -----------------------------
router.get('/', (req,res) => {
  Lifting.find({})
      .then((data)=> {
          res.json(data);
      })
})

router.get('/specific/:id', (req,res) => {
  Lifting.findById(req.params.id)
      .then((data)=> {
          res.json(data);
      })
})

//POSTS ----------------------------
router.post('/add', (req,res) => {
  var newLift = Lifting(req.body)
  newLift.save().then(()=> res.send("complete"))
})

//PUTS -----------------------------
router.put('/update/:id', (req,res) => {
  console.log(req.params.id)
  Lifting.findByIdAndUpdate(req.params.id, req.body)
    .then(()=> {
      res.send('Updated lifting event.')
    })
})

//DELETES --------------------------
router.delete('/delete/:id', (req,res) => {
  console.log(req.params.id)
  Lifting.findByIdAndDelete(req.params.id)
    .then(()=> {
      res.send('Deleted lifting event.')
    })
})

module.exports = router