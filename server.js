const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

dotenv.config({path : 'config.env'});
const PORT = process.env.PORT || 8080

// log request
app.use(morgan('tiny'));

// MongoDB connection
connectDB();

// parse request body-parser
app.use(bodyParser.urlencoded({extended: true}));

// set view engine
app.set('view engine', 'ejs');

// load assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')));
app.use('/img',express.static(path.resolve(__dirname,'assets/img')));
app.use('/js',express.static(path.resolve(__dirname,'assets/js')));
app.use('/uploads',express.static(path.resolve(__dirname,'assets/uploads')));

app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});