/**
 * Created by wzwang on 2016/9/2.
 */
var fs = require("fs");
fs.readFile('input.txt', function(err, data) {
    if(err) {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("程序处理结束！");
