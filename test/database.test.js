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
    expect(database.connection.readyState).to.be.gt(0) ? done() : done(false);
  });

  it('Insert a User', function (done) {
    var uuidv4 = uuid.v4();
    var user = new User({
      userName: uuidv4,
      passWord: uuidv4,
      weiXing: uuidv4,
      eMail: uuidv4 + '@163.com',
      department: 'Technology'
    });
    User.insert(user, function (err, result) {
      if (err) {
        console.error.bind(console, err);
        done(false)
      }
      console.log(JSON.stringify(result));
      done();
    })

  });

  it('List all users', function (done) {
    User.findAll(function (err, result) {
      if (err) {
        console.error.bind(console, err);
        done(false);
      }
      console.log(JSON.stringify(result));
      done();

    });
  });

  it('List user by Department', function (done) {
    User.findByDepartment('Technology', function (err, result) {
      if (err) {
        console.error.bind(console, err);
        done(false);
      }
      console.log(JSON.stringify(result));
      done()
    });
  });

});

