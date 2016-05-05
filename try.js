/**
 * Created by Mars on 2016/5/5.
 */
var express = require('express');
var app = new express();

app.set('port', 3000);

/**
 * root
 */
app.get('/', function (req, res) {
  res.type('text/plain');
  res.send('Hello World Node.js');
})

var mongoose = require('./lib/database');
var User = require('./lib/user')(mongoose);

// User.insert(function (err, result) {
//   console.log(result);
// })
app.get('/insert', function (req, res) {
  var user = new User({
    userName: 'abba',
    passWord: 'abba'
  });
  User.insert(user, function (err, result) {
    if (err) {
      console.error(JSON.stringify(err))
    }
    res.jsonp(result);
  })
})

/**
 * 404
 */
app.use(function (req, res) {
  console.log('404-Not Found');
  res.type('text/plain');
  res.status(404);
  res.send('404-- Not Found')
})

/**
 * 500
 */
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500-Server Error');
})

app.listen(3000, function () {
  console.log('Express started on %s:%s, Press Ctrl-C to Terminate', '192.168.0.103', app.get('port'));
})
