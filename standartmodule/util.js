/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var util=require('util');
var obj={
    a:5,
    b:6,
           inspect: function() {return 123;}
};
obj.self=obj;
console.log(util.inspect(obj));
console.log(obj);
console.log(util.format("%s %d %j","qqq",1234,{q:"456"}));
console.log("%s %d %j","qqq",1234,{q:"456"});
function A(n){
    this.n=n;
};
A.prototype.get=function (){
    console.log("get");
};
function B(n){
    this.n=n;
};
util.inherits(B,A);
B.prototype.stop=function (){
    console.log("stop");
};

var q=new B("q");
q.get();
q.stop();