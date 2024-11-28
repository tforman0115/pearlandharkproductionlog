const express = require('express');
const router = express.Router();


// When the bot sees a message in a group chat, this route is called
router.post('/', (req, res, next) => {
    console.log(req.body)
    res.status(200).json()
});

// Test for pinging the bot
router.get('/', (req, res, next) => {
    res.status(200).json({"message": "Pong!"})
});


module.exports = router;