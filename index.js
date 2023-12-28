// app.js
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const homeRoute = require('./routes/home');

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', homeRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
