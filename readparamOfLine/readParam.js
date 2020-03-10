/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//supervisor -- readParam.js port=3000
//nodejs readParam.js port=3000
//console.log(process.argv)
//npm i optimist
//nodejs readParam.js  --port=3000
var arg=require('optimist').argv
console.log(arg['port'])
console.log("arg")


//variable of enviroment
console.log(process.env.HOME)
console.log(process.env.arg)

