var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clubRouter = require('./routes/club');

var connect = require('./schemas');
const cors  = require('cors')

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const url = require('url');


var app = express();
connect();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter)
// login

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        url: "mongodb://fbtkddus123:ryu0506@localhost:27017/admin",
        collection: "sessions"
    })
}));


app.get('/', (req, res) => {
    if(req.session.logined) {
        res.render('logout', { id: req.session.user_id });
    } else {
        res.render('login');
    }
});

app.get('/Singup', (req, res) => {
    res.render('Singup');
});

app.post('/Signup', (req, res) => {
    let uid = req.body.user_id;
    let upwd = req.body.password;
    duplicate(req, res, uid, upwd);
});

app.post('/', (req, res) => {
    let uid = req.body.user_id;
    let upwd = req.body.password;
    duplicate(req, res, uid, upwd);
});

app.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(7000, () => {
    console.log('listening 7000 port');
});

function duplicate(req, res, uid, upwd) {
    let parseUrl = url.parse(req.url);
    let resource = parseUrl.pathname;
    if(resource == '/Signup') {
        User.findOne({ "user_id": uid }, (err, user) => {
            if(err) return res.json(err);

            if(user) {
                console.log('user id duplicate');
                res.send(`
                    <a href="/">Back</a>
                    <h1>User id duplicate</h1>
                `);
            } else {
                User.create({ "user_id": uid, "password": upwd }, (err) => {
                    if(err) return res.json(err);
                    console.log('Success');
                    res.redirect('/');
                })
            }
        })
    } else {
        User.findOne({ "user_id": uid }, (err, user) => {
            if(err) return res.json(err);

            if(user) {
                User.findOne({ "password": upwd })
                    .exec((err, user) => {
                    if(err) return res.json(err);

                    if(!user) {
                        console.log('different password');
                        res.send(`
                        <a href="/">Back</a>
                        <h1>Different password</h1>
                    `);
                    } else {
                        console.log('Welcome');
                        req.session.user_id = uid;
                        req.session.logined = true;
                        res.redirect('/');
                    }
                })
            } else {
                console.log('Cannot find user');
                res.send(`
                    <a href="/">Back</a>
                    <h1>Cannot find user</h1>
                `);
            }
        })
    }
}




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
