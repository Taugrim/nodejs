var User=require('./models/user').User
var user=new User({
    username:"Test_name2",
    password:"password"
})
user.save(function (err,user,affected) {
    console.log(arguments)
    User.findOne({username:"Test_name2"},function (err,user) {
        console.log(arguments)
    })
})





////var MongoClient = require('mongodb').MongoClient
//  , format = require('util').format;
//
//MongoClient.connect('mongodb://127.0.0.1:27017', function(err, db) {
//  if (err) throw err;
//var mdb=db.db('chat')
//  var collection = mdb.collection('test_insert');
////  var collection =collection db.collection('test_insert');
//  collection.remove({}, function(err, affected) {
//    if (err) throw err;
//console.log(arguments)
//console.log(arguments.length)
//    collection.insert({a: 2}, function(err, docs) {
//
//      var cursor = collection.find({a: 2});
//      cursor.toArray(function(err, results) {
//        console.dir(results);
//        // Let's close the db
//        db.close();
//      });
//    });
//
//  });
//});