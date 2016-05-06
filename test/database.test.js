/**
 * Created by Mars on 2016/5/5.
 */
const database = require('../lib/database');
const expect = require('chai').expect;
const uuid = require('uuid');
const User = require('../lib/user')(database);

describe('Test Mongodb', function () {
  this.timeout(8000);
  before(function (done) {
    database.connection.on('open', done);
    // setTimeout(done, 3000);
  });

  it('Mongoose Connection', function (done) {
    var result = database.connection.readyState;
    expect(database.connection.readyState).to.be.gt(0) ? done() : done(false);
    // setTimeout(done, 3000);
  });

  it('Insert a User', function (done) {
    var uuidv4 = uuid.v4();
    var user = new User({
      userName: uuidv4,
      passWord: uuidv4,
      weiXing: uuidv4,
      eMail: uuidv4 + '@163.com'
    });
    user.save(function (err, result) {
      if (err) {
        console.error(JSON.stringify(err));
        done(false)
      }
      console.log(JSON.stringify(result));
      done();
    });
    // setTimeout(done, 3000);
  });

});

