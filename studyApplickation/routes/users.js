exports.get=function (req,res) {
    var User = require('./../models/user').User
    var HttpError = require('./../errors').HttpError
        app.get('/users', function (req, res, next) {
            User.find({}, function (err, users) {
                if (err)
                    return next(err)
                res.json(users)
            })
        })
}