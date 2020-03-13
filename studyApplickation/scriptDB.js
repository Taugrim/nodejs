const mongoose = require('./libs/mongoose');
var async = require('async')


async.series([
    open,
    dropDatabase,
    createUsers,
    close
],function (err,results) {
 console.log(arguments)   
})
function open(callback) {
    mongoose.connection.on('open', callback)
}
function dropDatabase(callback) {
    var db = mongoose.connection.db;
    db.dropDatabase(callback)
}
function createUsers(callback) {
    var User = require('./models/user').User
    var users=[
        {username: "vasya", password: "123"},
        {username: "vasya", password: "123"},
        {username: "petya", password: "456"},
        {username: "admin", password: "qwe"}
    ]
    async.each(users,function (userData,callback) {
      var user=  new User(userData)
      user.save(callback)
    },callback)
}
function close(callback) {
    mongoose.disconnect(callback)
}