const express = require('express');
const router = express.Router();

// Changed send to render
router.get('/index', (req, res, next) => {
	res.send('Index');
});


module.exports = router;

// Might not need