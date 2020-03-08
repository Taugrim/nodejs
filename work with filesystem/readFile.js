/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var ROOT = __dirname + "/public/";
http.createServer(function (req, res) {
    !chechAccess(req) == true ? nA(req, res) : null;
    sendFileSafe(url.parse(req.url).pathname, res);
}).listen(3000)

function  sendFileSafe(filePath, res) {
    try{
        filePath=deccodeUruComponent(filePath)
    }
    catch (e){
         setRes(res,400,"br")
    }
    
     if (~filePath.indexOf('\0')){
     setRes(res,404,"br")
            return;
    }
    filePath=path.normalize(path.join(ROOT,filePath))
    
    fs.stat(filePath, function (err, stats) {
    if (err || !stats.isFile()){
      setRes(res,404,"nf")
    } 
sendFile(filePath, res);
} )
}
function setRes(res,code,message) {
   
 res.statusCode = code;
    res.end(message)
    return;
}

function nA(req, res) {
   setRes(res,403,"na")
    return;
}
function sendFile(filePath, res) {
    fs.readFile(filePath, function (err, content) {
        if (err) throw err
        var mime = require('mime').lookup(filePath);
        res.setHeader('Content-Type', mime + "; charset=utf-8");
        res.end(content);
    })
}



