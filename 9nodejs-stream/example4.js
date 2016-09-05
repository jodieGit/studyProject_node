/**
 * Created by wzwang on 2016/9/5.
 * 链式流：通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作
 */

var fs = require("fs");
var zlib = require('zlib');

//压缩input.txt文件为input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'))

console.log('文件压缩完成。');


//执行结果：
//文件压缩完成
//生成input.txt.gz压缩文件