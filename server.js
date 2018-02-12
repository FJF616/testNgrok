const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3030;

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.send('hello world');
});

server.post('/payload', (req, res) => {
  res.status(200).json(req.body);
  console.log(req.body);
});

server.listen(port, err => {
  if (err) {
    console.log('error connecting to server', err);
  } else {
    console.log(`Server listening on port: ${port}`);
  }
});
