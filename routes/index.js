var express = require('express');
var router = express.Router();

var  x;

/* GET home page. */
router.get('/', function(request, response) {
  response.render('index', { title: 'Express' });
  

  console.log("Cookies: ", request.cookies)

});

router.post('/',function(request,response) {
 	
 	x = request.param('name')

	console.log(x,'lol')

 	response.render('users',{title: x })

});

module.exports = router;
