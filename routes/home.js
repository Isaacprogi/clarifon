const express = require('express');
const router = express.Router();
const path = require('path')


router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../pages/home.html');
  res.sendFile(filePath)
});

module.exports = router