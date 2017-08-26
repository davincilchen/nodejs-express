'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var db = req.app.db.model.User;   //middleware 傳遞資料
  res.send('respond with a resource');
});


/* GET users/:id */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});


/* PUT users/:id */
router.put('/:id', function(req, res, next) {
  res.send('respond with a resource');
});


/* DELETE users/:id */
router.delete('/:id', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
