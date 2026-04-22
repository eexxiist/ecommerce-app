const router = require('express').Router()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/', deviceController.getOne)


module.exports = router