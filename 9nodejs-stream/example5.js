/**
 * Created by wzwang on 2016/9/5.
 * 解压该文件
 */

var fs = require('fs');
var zlib = require('zlib');

//解压input.txt.gz文件为input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input1.txt'));

console.log("文件解压完成。");


//执行结果：
//文件解压完成
//解压文件input.txt.gz到input1.txt文件

