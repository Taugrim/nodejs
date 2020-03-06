/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var db=require('./db');
var user=require('./user');
function run(){
var vasya=new user.User("Вася");

var petya=new user.User("Петя");
vasya.hello(petya);
console.log(db.getPhrases("run"));}
if(module.parent){exports.run=run;}
else{run();}