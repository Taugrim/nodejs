var express = require('express');
var http = require('http');
var path = require('path');
var config=require('./config');
var log=require('./libs/log')(module)
var app = express();
app.set('port', config.get('port'));



app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
//app.use(express.cookieParser('your secret here'));
//app.use(express.session());
app.use(app.router);
app.get('/',function (req,res,next) {
    res.render("index",{qwer:'<b>ASDFGH</b>',title:'TITLE'})
//    res.end("home")
    next()
})
app.get('/q',function (req,res,next) {
    res.end("q")
    next()
})
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(err, req, res, next) {
  // NODE_ENV = 'production'
  if (app.get('env') == 'development') {
    var errorHandler = express.errorHandler();
    errorHandler(err, req, res, next);
  } else {
    res.send(500);
  }
});
/*

var routes = require('./routes');
var user = require('./routes/user');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/users', user.list);

*/
http.createServer(app).listen(app.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});