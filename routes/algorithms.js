const express = require('express');
const router = express.Router();

// Algorithms sections

router.get('/', (req, res, next) => {
	res.send('index');
});

// Algorithm
router.get('/algo', (req, res, next) => {
	res.send('ALGO');
});

module.exports = router;