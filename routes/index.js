var express = require('express');
var mongoose = require('mongoose');
var User   = require('../models/user')

var router  = express.Router();

mongoose.connect('mongodb://localhost/chitter' );

var db = mongoose.connection;

/* GET home page. */
router.get('/', function(request, response) {
  response.render('index', { title: 'Chiiter' });
  
});


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log('connection succeed')

  // Saving on db

	router.post('/',function(request,response) {
 	
		var user = new User({ name: request.param('name') })

    user.save()

 		response.render('users',{title: user.name})

	});
});

module.exports = router;
