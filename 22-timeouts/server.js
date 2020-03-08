/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http=require('http');
var server=new http.Server(function (req,res) {
    
}).listen(3000);
setTimeout(function () {
    server.close();
//    server.close(function () {
//        process.exit;
//    });
},2500);
var timer=setInterval(function () {
    console.log("qqq")
},1000);
timer.unref();
