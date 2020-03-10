/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var domain=require('domain')
var serverDomain=domain.createDomain()
var server;
serverDomain.on('error',function (err) {
    console.error('err '+err)
    console.log('err '+err)
})
serverDomain.run(function () {
     server=require('./server')
    server.listen(3000)
})