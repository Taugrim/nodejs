/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fs=require('fs');
fs.open(__filename,"r",function (err,file) {
    console.log("IO");

    
});
setImmediate(function () {
    console.log("imm");    
});
process.nextTick(function () {
    console.log("NT");    
});