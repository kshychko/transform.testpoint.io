var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');


var index = require('./routes/index');
var users = require('./routes/users');
var upload = require('./routes/upload');
var unmarshall = require('./routes/unmarshall');
var marshall = require('./routes/marshall');

var ubl2json = require('./routes/ubl2json');
var json2ubl = require('./routes/json2ubl');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/ubl2json', ubl2json);
app.use('/json2ubl', json2ubl);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());


app.use('/', index);
app.use('/upload', upload);
app.use('/users', users);
app.use('/unmarshall', unmarshall);
app.use('/marshall', marshall);


app.use(express.static(__dirname + '/resources'));
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    var status = err.status || 500;
    res.status(status);
    var errors = {"Errors": [{"Error": {"code": status, "title": err.message}}]};
    res.end(JSON.stringify(errors));
    /*res.render('error');*/
});


module.exports = app;
