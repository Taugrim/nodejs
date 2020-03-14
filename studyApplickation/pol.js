/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var winston=require("winston")
var log=require('./libs/log')(module)


//
//      winston.createLogger({
//        
//        transports:[
//            new winston.transports.Console()],
//                colorize:true,
//                level:'debug',
////                level:ENV=='developement'?'debug':'error',
//                label:path
//            })
//            
           
        
    

var path=module.filename
        .split('/').slice(-2).join('/')
log.log('info','www')
log.info('www')
log.debug('www')
//console.log(log)
//console.log(path)