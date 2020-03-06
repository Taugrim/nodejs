/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var util=require('util');
var http=require('http');
var url=require('url');
var server= new http.Server();
server.listen(8080,'127.0.0.1');
server.on('request',function (req,res) {
    var parse=url.parse(req.url,true)
    console.log(parse)
    if(parse.pathname=='/echo'&&parse.query.message){
    res.end(parse.query.message);}
else{res.statusCode=404;
    res.end("Page not found")
    }
});

