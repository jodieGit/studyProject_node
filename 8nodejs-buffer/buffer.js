/**
 * Created by wzwang on 2016/9/2.
 */


//Node Buffer类可以通过多种方法来创建

//方法1:创建长度为10字节的Buffer实例
var buf = new Buffer(10);

//方法2：通过给定的数组创建Buffer实例：
var buf = new Buffer([10, 20, 30, 40, 50]);

//方法3：通过一个字符串来创建Buffer实例：
var buf = new Buffer('www.runoob.com', 'utf-8');

//utf-8是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"


//写入缓冲区

//语法：
//buf.write(string[, offset[, length]][, encoding]);
//string: 写入缓冲区的字符串
//offset: 缓冲区开始写入的索引值，默认为0
//length: 写入的字节数，默认为buffer.length
//encoding: 使用的编码，默认为utf-8

//返回值：返回实际写入的大小，如果buffer空间不足，则只会写入部分字符串


//从缓冲区读取数据

//语法：buf.toString([encoding[, start[, end]]]);
//参数说明：encoding: 使用的编码，默认是utf-8
//         start: 指定开始读取的索引位置，默认为0
//         end: 结束位置，默认为缓冲区的末尾

//返回值：解码缓冲区数据并使用指定的编码返回字符串


//将Buffer转换为JSON对象

//语法：buf.toJSON();
//返回值：返回JSON对象


//缓冲区合并

//语法： Buffer.concat(list[, totalLength]);
//参数：list:用于合并的Buffer对象数组列表
//     totalLength: 指定合并后Buffer对象的总长度
// 返回值： 返回一个多个成员合并的新的Buffer对象的总长度



//缓冲区比较
//语法：buf.compare(otherBuffer);
//参数：otherBuffer：与buf对象比较的另外一个Buffer对象
//返回值：返回一个数字，表示buf在otherBuffer之前，之后或相同



//拷贝缓冲区

//语法： buf.copy(targetBuffer[, targetStart[, [sourceStart[, sourceEnd]]]]);
//参数：targetBuffer: 要拷贝的Buffer对象
//     targetStart: 数字，可选，默认：0
//     sourceStart: 数字，可选，默认：0
//     sourceEnd:   数字，可选，默认：buffer.length
//返回值：没有返回值


