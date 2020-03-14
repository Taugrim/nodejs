module.exports = function (app) {
    app.get('/',require('frontPage').get)
    app.get('/login',require('login').get)
    app.get('/chat',require('chat').get)
    app.get('/users',require('users').get(app))
    app.get('/user/:id',require('user').get(app))
}
