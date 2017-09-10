/* https://www.youtube.com/watch?v=DQ9pZ2NKXRo 
   https://www.youtube.com/watch?v=OILrJmjkId4	
*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

// Creates server
const app = express();

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Index Route
app.get('/', (req, res) => {
	res.send('Beautiful Algorithms Project');
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
	console.log('Server started on port ' + port);
});


