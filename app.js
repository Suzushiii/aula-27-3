/* eslint-disable linebreak-style */
const createError = require('http-errors');

const express = require('express');

const path = require('path');

const cookieParser = require('cookie-parser');

const logger = require('morgan');


const clientesRouter = require('./routes/clientes');

const usersRouter = require('./routes/users');

const produtosRouter = require('./routes/produtos');

const indexRouter = require('./routes/index');

const nodeCache = require('node-cache');

const cache = new nodeCache();

const app = express();


const dotenv = require('dotenv');

dotenv.config();

/* console.log(process.env.MYSQL_DB); */


// view engine setup

app.get('/clientes', (req, res) => {
  const chaveCache = 'clientes';
  const clientesCache = cache.get(chaveCache);
  if (clientesCache !== undefined) {
    console.log('Clientes recuperados do cache');
    res.json(clientesCache);
  } else {
    const connection = connectDB();
    connection.query('SELECT * FROM clientes', (err, results) => {
      if (err) {
        console.error('Erro ao buscar clientes:', err);
        res.status(500).send('Erro interno do servidor');
      } else {
        console.log('Clientes recuperados do banco de dados');
        cache.set(chaveCache, results, 30);
        res.json(results); // Retorna os clientes
      }
    });
    connection.end();
  }
});


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'jade');


app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/clientes', clientesRouter);

app.use('/users', usersRouter);

app.use('/produtos', produtosRouter);

app.use('/', indexRouter);


// catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
});


// error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development

  res.locals.message = err.message;

  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page

  res.status(err.status || 500);

  res.render('error');
});


module.exports = app;


