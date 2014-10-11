var express = require('express');
var mongoose = require('mongoose');
var User   = require('../models/user')

var router  = express.Router();

mongoose.connect('mongodb://localhost/chitter' );

var db = mongoose.connection;

/* GET home page. */
router.get('/', function(request, response) {
  response.render('index', { title: 'Chitter' });
  
});


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log('connection succeed')

  // Saving on db

	router.post('/',function(request,response) {
 	
		var user = new User({ username:  request.param('username'),
		                      email:     request.param('email'),
		                      password:  request.param('password'),
		                      pswd_conf: request.param('pswd_conf')  })

    user.save()

 		response.render('users',{title: user.name})

	});
});



module.exports = router;
