/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function errr(err) {
    if (err) {
        console.error(err);
    }
}
;
var fs = require('fs');
fs.writeFile("file.tmp", "data", function (err) {
    errr(err)
    fs.rename("file.tmp", "new.tmp", function (err) {
        errr(err)
        fs.unlink("new.tmp"), function (err) {
            errr(err)
        }
    })
});
