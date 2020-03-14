
var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
var log = require('./libs/log')(module);
var mongoose = require('./libs/mongoose');
var User = require('./models/user').User
var HttpError = require('./errors').HttpError

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');


app.use(express.favicon());

if (app.get('env') == 'development') {
    app.use(express.logger('dev'));
} else {
    app.use(express.logger('default'));
}

app.use(express.bodyParser());

app.use(express.cookieParser());



    
app.use(require('./middleware/sendHttpError'));

var MongoStore = require('connect-mongo')(express)
app.use(express.session(
        {secret: config.get("mongoose:session:secret"),
            key: config.get("session:key"),
            cookie: config.get("session:cookie"),
            store: new MongoStore({
                mongoose_connection: mongoose.connection,
                url: config.get("mongoose:url")
            })
        }
));

app.use(function (req, res, next) {
    req.session.numberOfVisits = req.session.numberOfVisits + 1 || 1;
    res.send("Visits: " + req.session.numberOfVisits);
});

app.use(app.router);
require('./routes')(app);
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (err, req, res, next) {
    console.log('11 ' + err)
    if (typeof err == 'number') {
        console.log('12')
        err = new HttpError(err)
    }
    if (err instanceof HttpError) {
        console.log('13')
        res.sendHttpError(err)
    } else {
        console.log('14')
        if (app.get('env') == 'development') {
            var errorHandler = express.errorHandler();
            errorHandler(err, req, res, next);
        } else {
        err = new HttpError(500)
        res.sendHttpError(err)
        }
    }
});


http.createServer(app).listen(config.get('port'), function () {
    log.info('Express server listening on port ' + config.get('port'));
});
