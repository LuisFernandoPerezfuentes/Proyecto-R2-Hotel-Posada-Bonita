require('dotenv').config();
require('./config/config');
require('./database');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const uuid = require('uuid/v4');
const { format } = require('timeago.js');

const rtsIndex = require('./routes/index.router');

var app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./dist/mean-hotelposada'));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '/dist/mean-hotelposada/server/index.js'));
});

app.use(express.urlencoded({limit: '10mb', extended: true}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'uploads/productos'),
    filename: (req, file, cb, filename) => {
        console.log(file);
        cb(null, uuid() + path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('filename'));

// Global variables
app.use((req, res, next) => {
    app.locals.format = format;
    next();
});
app.use(express.static(path.join(__dirname, 'uploads')));

//Routes
app.use(process.env.URL_USER ,require('./routes/user.routes'));
app.use(process.env.URL_CLIENT ,require('./routes/client.routes'));
app.use(process.env.URL_INDEX ,require('./routes/index.router'));
app.use(process.env.URL_SUPPLIE ,require('./routes/supplie.routes'));



//Starting the server
app.listen(process.env.PORT, () => console.log('server started in', process.env.PORT));