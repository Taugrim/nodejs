const mongoose = require('./libs/mongoose');
var User = require('./models/user').User

console.log(mongoose.connection.readyState)
mongoose.connection.on('open',function() {
var db=mongoose.connection.db;
db.dropDatabase(function (err) {
    if(err)throw  err
    console.log("OK") 
    })})