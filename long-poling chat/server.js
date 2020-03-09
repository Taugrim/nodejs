/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http = require('http')
var fs = require('fs')
var chat = require('./chat')
http.createServer(function (req, res) {
    switch (req.url) {

//        case '/':sendFile(__filename,res)
        case '/':
            
            sendFile("/home/q/NetBeansProjects/nodejs/long-poling chat/index.html", res)
            break;
        case '/subscribe':
          
            chat.subscribe(req, res)
            break;
        case '/publish':
            var body = ''
            req.on('readable',function() {body += req.read();console.log('readable '+body)})
             .on('end', function () {
                 if(body.length>1e4){res.statusCode=413;res.end('big message')}
                        try {
                            body = JSON.parse(body)
                             console.log('JSON '+body.message)
                        } catch (e) {
                            res.statusCode = 400;
                            res.end('B R')
                            return;
                        }
                   

            console.log('publish1 '+body.message)
            chat.publish(body.message)
//            chat.publish(body)
            res.end('ok') })
            break;
        default:
            res.statusCode = 400
            res.end("nf")
    }
}).listen(3000, '127.0.0.1')

function sendFile(filename, res) {
    var fileStream = fs.createReadStream(filename)
    fileStream.on('error', () => {
        res.statusCode = 500;
        res.end("serever error")
    })
    fileStream.pipe(res)
}

