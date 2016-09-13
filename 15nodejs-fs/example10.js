/**
 * Created by wzwang on 2016/9/12.
 */

var fs = require("fs");

console.log("查看 /tmp 目录");
fs.readdir('/tem/', function(err, files) {
    if(err) {
        return console.error(err);
    }
    files.forEach(function(file) {
        console.log(file);
    })
});
