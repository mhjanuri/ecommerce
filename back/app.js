const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// App
const app = express();

// DB
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

// Routes
app.get('/', (req, res) => {
    res.send('hello from the backend side');
});

const PORT = process.env.PORT || 2020;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});