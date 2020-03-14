/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nconf=require('nconf')
var path=require('path')
nconf.argv().env().file({file:path.join(__dirname,"config.json")})
module.exports=nconf;

