/**
 * Created by Mars on 2016/5/3.
 */
const Express = require('express');
const app = new Express();

/**
 * 设置环境变量
 */
app.set('port', 3000);

const database = require('./lib/database');

const User = require('./lib/user')(database);

/**
 * 根目录
 */
app.get('/', function (req, res) {
  res.type('text/plain');
  res.send('Hello World Node.js');
});

/**
 * /insert
 */
app.get('/user/insert', function (req, res) {
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

app.get('/user/listall', function (req, res) {
  // var User = require('./lib/user')(database);
  User.findAll(function (err, result) {
    if (err) {
      console.error(JSON.stringify(err));

    }
    res.jsonp(result);
  })

})

/**
 * 404错误
 */
app.use(function (req, res, next) {
  console.log('404-Not Found');
  res.type('text/plain');
  res.status(404);
  res.send('404-- Not Found');
});

/**
 * 500错误
 */
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500-Server Error');
});

/**
 * 监听3000端口
 */
app.listen(3000, function () {
  console.log('Express started on %s:%s, Press Ctrl-C to Terminate', '192.168.0.103', app.get('port'));
});
