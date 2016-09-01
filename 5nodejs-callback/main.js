/**
 * Created by wzwang on 2016/8/30.
 */

//part1:依次一个一个执行，顺序输出
//var fs = require("fs");
//var data = fs.readFileSync("input.txt");
//console.log(data.toString());
//console.log("程序执行结束~");

//part1执行结果：
//    菜鸟教程官网地址：www.runoob.com
//    程序执行结束！

//part2:异步操作
var fs = require("fs");
fs.readFile("input.txt", function (err, data) {
    if (err) {
        return console.log("err:" + err);
    }
    console.log("data:" + data.toString());
});
console.log("程序执行结束");

//part2执行结果：
//程序执行结束！
//菜鸟教程官网地址：www.runoob.com
//主要都要用utf-8打开
