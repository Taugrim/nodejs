/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var clients=[]
exports.subscribe=function (req,res) {
   
    clients.push(res)
    res.on('close',()=>clients.splice(clients.indexOf(res),1))
}
exports.publish=function (message) {
    clients.forEach(function (res){res.end(message)})
    clients=[]
}
