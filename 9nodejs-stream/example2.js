/**
 * Created by wzwang on 2016/9/5.
 * description: 写入流
 */
var fs = require('fs');
var data = '菜鸟教程官网地址： www.runoob.com';

//创建一个可以写入的流，写入到文件output.txt
var writeStream = fs.createWriteStream('output.txt');

//使用utf8编码写入数据
writeStream.write(data, 'UTF8');

//标记文件末尾
writeStream.end();

//处理流事件 --> data, end ,and error
writeStream.on('finish', function() {
    console.log('写入完成');
});

writeStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('程序执行完毕');

//执行结果：
//程序执行完毕
//写入完成

//查看output.txt
//菜鸟教程官网地址： www.runoob.com