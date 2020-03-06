/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var event=require('events').EventEmitter;
var server= new event;
server.on('error',function (){
    console.log("error");
});
server.emit("error")
