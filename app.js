var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var hello = require('./routes/hello');
var test = require('./routes/test');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





// ======================================== //

//do 1-1
/*
var mongoose = require('mongoose'); //npm i mongoose --save // upup
mongoose.connect('mongodb://test:123456@ds151242.mlab.com:51242/vcard');

var db = mongoose.connection;
db.once('open', function callback () {
  console.log('MongoDB: connected.'); 
});
*/



/*
//do 1-2
var mongoose = require('mongoose'); //npm i mongoose --save // upup


app.use(function(req, res, next) {
    mongoose.connect('mongodb://test:123456@ds151242.mlab.com:51242/vcard');
    var db = mongoose.connection;
    db.once('open', function callback () {
      console.log('MongoDB: connected.'); 
    //next(err); /before 1-3
    });
});
*/

/*
//do 1-3
var mongoose = require('mongoose'); //npm i mongoose --save // upup  code


app.use(function(req, res, next) {
    mongoose.connect('mongodb://test:123456@ds151242.mlab.com:51242/vcard');
    var db = mongoose.connection;
    db.once('open', function callback () {
      console.log('MongoDB: connected.'); 
      next(); //before 1-3  //沒寫會block , next 到下一個狀態,  state machine
    });
});
*/


//do 1-4
var mongoose = require('mongoose'); //npm i mongoose --save // upup  code


app.use(function(req, res, next) {
    mongoose.connect('mongodb://test:123456@ds151242.mlab.com:51242/vcard');
    var db = mongoose.connection;
    
    /*
    var userSchema = mongoose.Schema({
      Name: String,
      Phone: String,
      Email: String,
      Address: String,
      Age: Number
    });
   
    
    db.once('open', function callback () {
      console.log('MongoDB: connected.'); 
      
      app.db = {
        model:{
            User:mongoose.model('User',userSchema);
        }    
      
      };    
    */    
      next(); //before 1-3  //沒寫會block , next 到下一個狀態,  state machine
    });
});




// ======================================= //
app.use('/', routes);
app.use('/users', users);
app.use('/hello', hello);  //(url, hello.js) //url api hello下
app.use('/chen', test);  //(url, test.js)  //url api chen 下



// ======================================== //

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
