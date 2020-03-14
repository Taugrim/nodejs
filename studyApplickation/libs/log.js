/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var winston=require('winston')
var ENV=process.env.NODE_ENV
function getLogger(module) {
var path=module
        .filename
        .split('/').slice(-2).join('/')
var q= 
     
   
   
    winston.createLogger({
  transports: [new winston.transports.Console({ 
       colorize:true,
                level:'debug',
//                level:ENV=='developement'?'debug':'error',
                label:path
            })],
        label:path,
        level:'debug',
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple()
  )
})

   return q }

module.exports=getLogger;
