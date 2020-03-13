var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
var log = require('./libs/log')(module);
var User=require('./models/user').User

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');


app.use(express.favicon());

if (app.get('env') == 'development') {
    app.use(express.logger('dev'));
} else {
    app.use(express.logger('default'));
}

app.use(express.bodyParser());

app.use(express.cookieParser());

app.use(app.router);


app.get('/', function (req, res, next) {
    res.render("index");
});
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', function (req, res, next) {
    User.find({},function (err,users) {
        if(err)return next(err)
        res.json(users)
    })
})
app.get('/user/:id', function (req, res, next) {
    User.findById(req.params.id
    ,function (err,user) {
        if(err)return next(err)
        res.json(user)
    })
})





app.use(function (err, req, res, next) {
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

http.createServer(app).listen(config.get('port'), function () {
    log.info('Express server listening on port ' + config.get('port'));
});
