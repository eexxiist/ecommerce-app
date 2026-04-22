const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ message: 'device works' })
})

module.exports = router