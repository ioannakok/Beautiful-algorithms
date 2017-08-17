const express = require('express');
const router = express.Router();

// Algorithms sections

// Changed send to render
router.get('/', (req, res, next) => {
	res.render('index');
});


module.exports = router;