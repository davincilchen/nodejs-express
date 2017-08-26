'use strict';//mv views/.jshintrc .

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('hello');
});

router.get('/foo', function(req, res, next) {
  res.send('foo');
});


router.get('/bar/1', function(req, res, next) {
  res.render('bar',{
      message: '121567'
  });
});

module.exports = router;
