var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    
    	email:     String,
    	username:  String,
    	password:  String,
    	pswd_conf: String,

		})

module.exports = mongoose.model('User', userSchema)


