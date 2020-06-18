const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoute = require('./routes/user')

// App
const app = express();

// DB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});

// Routes middleware
app.use('/api', (userRoute));

const PORT = process.env.PORT || 2020;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});