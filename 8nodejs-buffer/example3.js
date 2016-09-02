/**
 * Created by wzwang on 2016/9/2.
 */
var buf = new Buffer('www.runoob.com');
var json = buf.toJSON();

console.log(json);
//[119, 119, 119, 46, 114, 117, 110, 111, 111, 98, 46, 99, 111, 109]
