/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http=require('http');
var server= http.createServer(function (req,res) {
    process.nextTick(function () {
        req.on('readable',function () {
            //сработает на ближайших данных
        })
    })
    
}).listen(3000);
