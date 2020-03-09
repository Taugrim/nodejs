/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var http = require('http');
var fs = require('fs');
new http.Server(function (req, res) {
    if(req.url ) {
//    if(req.url == "/" + __felename ) {
//        var file = new fs.FileReadStream("writeFile");
        var file = new fs.FileReadStream(__filename);
    sendFile(file,res);
    } 
}).listen(3000,'127.0.0.1');
function sendFile(file,res) {
   file.pipe(res);
//   for(var i=0;i<1000000000;i++){
//   res.write(i.toString())
//   res.write("\n")
//   res.("\n")
//   }
   file.pipe(process.stdout);
   file.on('error',(err)=>{
       res.statusCode=500;
       res.end(err.toString());
       console.error(err);
   });
   file.on('open',()=>{console.log('open');});
   file.on('close',()=>{console.log('close');});
   res.on('close',()=>{console.log('close');file.destroy();});
}
function event(obj,event,fun) {
//    obj.on(event,fun());
};
