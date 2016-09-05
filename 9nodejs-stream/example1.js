/**
 * Created by wzwang on 2016/9/5.
 * description: 从流中读取数据
 */
var fs = require('fs');
var data = '';

//创建可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码为utf8
readerStream.setEncoding('UTF8');

//处理流事件 -->  data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function() {
    cosole.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("程序执行完毕");

//运行结果：
//程序执行完毕
//菜鸟教程官网地址：www.runoob.com
