const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const db=require('./db');
require('dotenv').config();

const userRouter = require('./userRouter');
const bookRouter = require('./bookRouter');
const issuedBookRouter = require('./issuedBookRouter');

const PORT=process.env.PORT;

const app = express();
app.use(bodyParse.json());
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));

app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/issuedBook',issuedBookRouter);

app.listen(PORT, function () {
    console.log("Server started...");
})