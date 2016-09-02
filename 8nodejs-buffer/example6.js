/**
 * Created by wzwang on 2016/9/2.
 */
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 + '在 ' + buffer2 + '之前');
} else if(result == 0) {
    console.log(buffer1 + '与' + buffer2 + '相同');
} else {
    console.log(buffer1 + '在' + buffer2 + '之后');
}

//输出 ABC在ABCD之前