const express = require('express');
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));
app.use('/auth', authRouter);
app.use('/user', userRouter);

app.get('/', async (request, response) => {
    response.status(200).json("Welcome To API");
})

app.listen(4000, function () {
    console.log('Server started...');
})