const mongoose = require('mongoose');
require('dotenv').config();

const LOCAL_DB_URL = process.env.LOCAL_DB_URL;

mongoose.connect(LOCAL_DB_URL);
const db = mongoose.connection;

db.on("connected", function () {
    console.log("Database is connected...");
});

db.on("disconnected", function () {
    console.log("Database is disconnected...");
});

db.on("error", function () {
    console.log("Something went wrong while creating database connection...",error);
});