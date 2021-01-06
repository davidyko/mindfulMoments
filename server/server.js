const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('../config.js');
const router = require('./router/routes.js');

const PORT = 7777;

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(express.static('client/dist'));
// app.post('/user', (req, res) => {
//   const user = req.body;

// });
app.use('/', router);

app.listen(PORT, () => console.log('Listening on port: ', PORT));
