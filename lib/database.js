/**
 * Created by Mars on 2016/5/4.
 */
var mongoose = require('mongoose');
mongoose.connect("mongodb://root:admin@ds021989.mlab.com:21989/mongodb_test_20160324");
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', function () {
  console.log('The DataBase Success Opened!');
});

module.exports = mongoose;
