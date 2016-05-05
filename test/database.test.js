/**
 * Created by Mars on 2016/5/5.
 */
var database = require('../lib/database');
var expect = require('chai').expect;

describe('测试数据库连接', function () {
  before(function (done) {
    database.connection.on('connected', done);
  })

  it('数据库是否已经连接？', function (done) {
    var result = database.connection.readyState;
    expect(database.connection.readyState).to.be.equal(1) ? done() : done(false);
  })
});
