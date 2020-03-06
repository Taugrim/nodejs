/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var phrases;
exports.connect=function(){
    phrases=require('./ru');
};
exports.getPhrases=function(name){
    if(!phrases[name]){throw new Error(" нет такой фразы "+name);}
return phrases[name];};