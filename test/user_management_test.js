process.env.NODE_ENV = 'test';
var server = require('../app.js');
var expect = require('chai').expect;
var Browser = require('zombie');


describe('home page', function() {
  var browser;
  
  before(function() {
    this.server = server.listen(8080);
    // initialize the browser using the same port as the test application
    browser = new Browser({ site: 'http://0.0.0.0:8080' });

  });


  before(function(done) {
    browser.visit('/', done);
  });

  after(function(done) {
     this.server.close(done);
  })


  it('should show a welcome message', function(){
    expect(browser.text('h1')).to.equal('Chitter');
  });


});