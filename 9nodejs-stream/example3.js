/**
 * Created by wzwang on 2016/9/5.
 * description: 管道流
 */

//设置input.txt内容：
// 菜鸟教程官网：www.runoob.com
//管道流操作实例

var fs =  require("fs");

//创建一个可读流
var readStream = fs.createReadStream('input.txt');

//创建一个可写流
var writeStream = fs.createWriteStream('output.txt');

//管道读写操作
//读取input.txt文件内容，并将内容写入到output.txt
readStream.pipe(writeStream);

console.log("程序执行完毕");

//执行结果：
//程序执行完毕


//output.txt
//菜鸟教程官网：www.runoob.com
//管道流操作实例



