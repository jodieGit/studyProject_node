/**
 * Created by wzwang on 2016/9/2.
 */

//写入缓冲区
buf = new Buffer(256);
len = buf.write("www.runoob.com");

console.log("写入字节数：" + len);
