const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users.routes');
const usersGraphqlRouter = require('./routes/users.graphql.routes');

const app = express();

const cors = require('cors')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// cors
// app.use((req, res, next) => {
//     //add cors for all response
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

app.use(cors({
    origin: 'http://localhost:3006', // TAREA 2
    credentials: true
}));

// route
app.use('/users', usersRouter);
app.use('/graphql/users', usersGraphqlRouter);


//
module.exports = app;
