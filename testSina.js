/**
 * Created by Mars on 2016/5/19.
 */
var protractor = require('protractor');
var browser = protractor.browser;

describe('test sina.com.cn', function () {
  it('It should be a title', function (done) {
    browser.get('http://www.sina.com.cn');
    var result = browser.getTitle();
    console.log("result is %s",JSON.stringify(result));
    done()
  })
})
