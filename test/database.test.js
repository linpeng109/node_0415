/**
 * Created by Mars on 2016/5/5.
 */
var database = require('../lib/database');
var User = require('../lib/user')(database);
var expect = require('chai').expect;

describe('Test mongodb connecte', function () {
  before(function (done) {
    database.connection.on('connected', done);
  })

  it('mongodb is open ？', function (done) {
    var result = database.connection.readyState;
    expect(database.connection.readyState).to.be.equal(1) ? done() : done(false);
  })
  it('insert a user', function (done) {
    var user = new User({
      userName: 'abddd',
      passWord: 'abddd'
    });
    User.insert(user, function (err, result) {
      expect(err === null).to.be.ok ? done() : done(false);
    });
  });
})
;
