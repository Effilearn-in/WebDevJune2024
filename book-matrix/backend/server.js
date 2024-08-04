const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const userRouter = require('./userRouter');
const bookRouter = require('./bookRouter');
const issuedBookRouter = require('./issuedBookRouter');

const PORT = process.env.PORT || 4000; 

const app = express();
app.use(bodyParser.json()); 
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));

app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/issuedBook', issuedBookRouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`); // Include the port number in the log message
});
