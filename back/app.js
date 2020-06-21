const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
require('dotenv').config();

// import routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')


// App
const app = express();

// DB
mongoose
    .connect(process.env.DATABASE, {
        // .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

// Routes Middleware
app.use('/api', (authRoutes));
app.use('/api', (userRoutes));
app.use('/api', (categoryRoutes));
app.use('/api', (productRoutes));


const PORT = process.env.PORT || 2020;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});