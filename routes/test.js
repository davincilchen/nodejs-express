'use strict';//mv views/.jshintrc .

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('hello xx');
});

router.get('/coo', function(req, res, next) {
  res.send('coo');
});


router.get('/bar/1', function(req, res, next) {
  res.render('bar');
});

module.exports = router;
