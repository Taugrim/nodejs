/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var util=require('util');
var ph={"Hello":"привет",
    "ok":"ok"};
function PhError(mes){this.message=mes;
    Error.captureStackTrace(this,PhError);};
util.inherits(PhError,Error);
PhError.prototype.name="PhError";
function HttpError(status,mess){
    this.status=status;
    this.message=mess;
 Error.captureStackTrace(this,HttpError);};
util.inherits(HttpError,Error);
HttpError.prototype.name="HttpError";

function getPh(name){
    if(!ph[name]){
        throw  new PhError(name);
    }
}
function getPage(url){
    if(url!=="index.html"){
        throw  new HttpError(404,url);
    }
    return url+getPh("o");
}
try{
    var p=new getPage("in");
} 
catch (e){
    if(e instanceof HttpError){console.log(e.message,e.status,e.stack);}
 else{console.log("Error ",e.message,e.name,e.stack);};
try{
    var p=new getPage("index.html");
} 
catch (e){
    if(e instanceof HttpError){console.log(e.status,e.message);}
    else{console.log("Error ",e.message,e.name,e.stack);};
}}