const mongoose = require('./libs/mongoose');
var async = require('async')


async.series([
    open,
    dropDatabase,
    reqModels,
    createUsers
   
],function (err,results) {
 console.log(arguments) 
    mongoose.disconnect()
    process.exit(err?255:0)
})
function open(callback) {
    mongoose.connection.on('open', callback)
}
function dropDatabase(callback) {
    var db = mongoose.connection.db;
    db.dropDatabase(callback)
}
function reqModels(callback) {
     require('./models/user')
     async.each(Object.keys(mongoose.models),function (modelName,callback) {
                mongoose.models[modelName].ensureIndexes(callback)
            },callback)
}
function createUsers(callback) {
   
    var users=[
        {username: "vasya", password: "123"},
        {username: "vasya", password: "123"},
        {username: "petya", password: "456"},
        {username: "admin", password: "qwe"}
    ]
    async.each(users,function (userData,callback) {
      var user=  new mongoose.models.User(userData)
      user.save(callback)
    },callback)
}
function close(callback) {
    mongoose.disconnect(callback)
}