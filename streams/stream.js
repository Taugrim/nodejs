/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var fs=require('fs');
var stream=fs.ReadStream(__filename);
stream.on('readable',function () {
    var data=stream.read();
    console.log(data)
   data!=null? console.log(data.toString('utf-8')):{}
    
});
stream.on('end',function () {
    console.log("end")
});
stream.on('error',function () {
    console.log("err")
});
stream.on('open',function () {
    console.log("open")
});
stream.on('close',function () {
    console.log("close")
});