/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fs=require('fs')
module.exports=function handler(req,res) {
    if(req.url=='/'){
    fs.readFile('index.html',process.domain.bind(function (err,content) {
        if(err){throw err  }
        res.end(content)
        
    }))}
    else{res.statusCode=404
    res.end('mf')}
}
