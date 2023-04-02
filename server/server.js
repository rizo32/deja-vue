const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const corsOption = {
  origin: 'http://localhost:8081',
  credentials: true,
};

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test
app.get('/', (req, res) => {
  res.json({ message: 'Welcome' });
});

// models
const db = require('./app/models');

db.connex.sync();
app.get('/uploads/:imageName', (req, res) => {
  res.sendFile(path.join(__dirname, 'uploads', req.params.imageName));
});

// Router
require('./app/routes/product.route')(app);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
