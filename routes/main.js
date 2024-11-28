const express = require('express');
const router = express.Router();


// When the bot sees a message in a group chat, this route is called
router.post('/', (req, res, next) => {
    console.log(req.body)
    res.send(200).json()
});


module.exports = router;