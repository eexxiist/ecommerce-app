const router = require('express').Router()

router.post("/", (req, res) => {
    res.json({ message: 'device works' })
});
router.get("/", (req, res) => {
    res.json({ message: 'device works' })
});

module.exports = router;
