const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/auth-api");
const db = mongoose.connection;

db.on("connected", function () {
    console.log("MongoDB database is connected...");
});

db.on("disconnected", function () {
    console.log("MongoDB database is disconnected...");
});

db.on("error", function () {
    console.log("Something went wrong while connecting to MongoDB database...");
});

module.exports = db;