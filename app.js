var express      = require('express'),
    path         = require('path'),
    cookieParser = require('cookie-parser'),  // Enables use of cookies
    bodyParser   = require('body-parser'),    // Really needed for get request.param
    routes       = require('./routes/index'),
    users        = require('./routes/users');

var app          = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/'     ,routes);
app.use('/users',users );

server = app.listen(8080, function(){

    console.log('Server details', server.address())
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
