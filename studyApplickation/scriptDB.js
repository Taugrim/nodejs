const mongoose = require('./libs/mongoose');
var async = require('async')
var User = require('./models/user').User

console.log(mongoose.connection.readyState)
mongoose.connection.on('open', function () {
    var db = mongoose.connection.db;
    db.dropDatabase(function (err) {
        if (err)
            throw  err
        console.log("OK")
        async.parallel([
            function (callbac) {
                var vasya = new User({username: "vasya", password: "123"})
                vasya.save(function (err) {
                    callbac(err, vasya)
                })
            },
            function (callbac) {
                var vasya1 = new User({username: "vasya", password: "123"})
                vasya1.save(function (err) {
                    callbac(err, vasya1)
                })
            },
            function (callbac) {
                var petya = new User({username: "petya", password: "456"})
                petya.save(function (err) {
                    callbac(err, petya)
                })
            },
            function (callbac) {
                var admin = new User({username: "admin", password: "qwe"})
                admin.save(function (err) {
                    callbac(err, admin)
                })
            }],
                function (err, result) {
                    console.log(arguments)
                    mongoose.disconnect()
                })
    })
})