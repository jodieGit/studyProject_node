/**
 * Created by wzwang on 2016/9/12.
 */

var fs = require("fs");

console.log("创建目录 /tmp/test/");
fs.mkdir("tem/test/", function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
})

//前提是tmp目录已经存在，否则会提示错误tmp文件夹不存在