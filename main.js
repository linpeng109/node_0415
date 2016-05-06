/**
 * Created by Mars on 2016/5/3.
 */
const Express = require('express');
const app = new Express();

app.set('port', 3000);

const database = require('./lib/database');

/**
 * root
 */
app.get('/', function (req, res) {
  res.type('text/plain');
  res.send('Hello World Node.js');
});


/**
 * /insert
 */
app.get('/user/insert', function (req, res) {
  const User = require('./lib/user')(database);
  var user = new User({
    userName: 'abbac',
    passWord: 'abbac'
  });
  User.insert(user, function (err, result) {
    if (err) {
      console.error(JSON.stringify(err));
    }
    res.jsonp(result);
  });
});


/**
 * 404
 */
app.use(function (req, res) {
  console.log('404-Not Found');
  res.type('text/plain');
  res.status(404);
  res.send('404-- Not Found');
});

/**
 * 500
 */
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500-Server Error');
});

app.listen(3000, function () {
  console.log('Express started on %s:%s, Press Ctrl-C to Terminate', '192.168.0.103', app.get('port'));
});
