const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

//initate server
const server = express();
const port = process.env.PORT || 5000;

//body-parser
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/users', (req, res) => {
	// res.send('Hello');
	const users = [
		{ id: 1, firstname: 'John', lastname: 'Doe' },
		{ id: 2, firstname: 'Jane', lastname: 'Doe' },
		{ id: 3, firstname: 'Jack', lastname: 'Doe' },
		{ id: 4, firstname: 'Jill', lastname: 'Doe' }
	];

	res.json(users);
});

server.listen(port, () =>
	console.log(`The server is listening on port ${port}`)
);
