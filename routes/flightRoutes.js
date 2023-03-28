const express = require('express')

const router = express.Router()

const flightControl = require('../controllers/flightController')



// index
router.get('/', flightControl.index)

// new
router.get('/new', flightControl.new)

router.delete('/clear', flightControl.clear)

// delete
router.delete('/:id', flightControl.delete)

// update
router.put('/:id', flightControl.update)

// seed 
router.post('/seed', flightControl.seed)

// create
router.post('/', flightControl.create)

// edit 
router.get('/:id/edit', flightControl.edit)

// show
router.get('/:id', flightControl.show)

// //ROUTES for destinations

// router.post('/:id/destinations', flightControl.createDestination)

// router.delete('/:id/destinations/:cid', flightControl.deleteDestination)

// router.get('/:id/destinations', flightControl.indexDestination)

// router.get('/:id/destinations/:cid', flightControl.showDestination)

// router.put('/:id/destinations/:cid', flightControl.updateDestination)
module.exports = router;