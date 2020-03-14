exports.get=function (req,res) {
    var User = require('./../models/user').User
    var HttpError = require('./../errors').HttpError
     app.get('/user/:id', function (req, res, next) {
        console.log('q ' + req.params.id)
        User.findById(req.params.id
                , function (err, user) {
                    console.log('qq ' + err)
                    if (err) {
                        console.log('qqq')
                        return next(err)
                    }
                    console.log('qqqq')
                    if (!user) {
                        console.log('q5')
                        next(new HttpError(404, "NF"))
                    }
                    console.log('q6')
                    res.json(user)
                })
    })
}