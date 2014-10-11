process.env.NODE_ENV = 'test';
var server = require('../app.js');
var assert = require("assert");
var Browser = require('zombie');


describe('home page', function() {
  var browser;
  
  before(function() {
    this.server = server.listen(3000);
    // initialize the browser using the same port as the test application
    browser = new Browser({ site: 'http://0.0.0.0:3000' });

  });


  before(function(done) {
    browser.visit('/', done);
  });

  after(function(done) {
     this.server.close(done);
  })


  it('should show a welcome message and a form', function(){
    browser.assert.text('h1', 'Chitter');
    browser.assert.element('form',1);
    browser.assert.attribute('form','method','post');
  });


});