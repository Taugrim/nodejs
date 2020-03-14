

module.exports = function (req, res, next) {
console.log('1')
    res.sendHttpError = function (error) {
        console.log('2')
        res.status(error.status);
        console.log('3')
        if (res.req.headers['x-requested-with'] == 'XMLHttpRequest') {
            console.log('4')
            res.json(error);
        } else {
            console.log('5')
            res.render("error", {error: error});
//            res.render("index", {});
        }
    };
    console.log('6')
    next();

};
