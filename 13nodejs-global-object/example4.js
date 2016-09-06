/**
 * Created by wzwang on 2016/9/6.
 */
//输出到终端
process.stdout.write("Hello World!" + "\n");

//通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

//获取执行路局
console.log(process.execPath);

//平台信息
console.log(process.platform);