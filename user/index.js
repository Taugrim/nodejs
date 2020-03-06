/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var db=require('../db');
db.connect();
function User(name){
    this.name=name;
    }
User.prototype.hello=function(who){
    console.log(db.getPhrases("Hello")+", "+who.name);
};
console.log('user.js');
exports.User=User;

