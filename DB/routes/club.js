var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var Club = require('../schemas/club');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;