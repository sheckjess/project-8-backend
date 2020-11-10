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

//POSTS ----------------------------


//PUTS -----------------------------


//DELETES --------------------------

module.exports = router