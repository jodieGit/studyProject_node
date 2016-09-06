/**
 * Created by wzwang on 2016/9/6.
 */
//输出全局变量__filename的值,__filename表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。
// 如果在模块中，返回的值是模块文件的路径。
//console.log(__filename);

//__dirname 表示当前执行脚本所在的目录
//console.log(__dirname);

//setTimeout(cb, ms):全局函数在指定的毫秒（ms）数后执行指定函数（cb）。setTimeout()只执行一次指定函数，返回一个代表定时器的句柄值
//function printHello() {
//    console.log("Hello World");
//}
//两秒后执行以上函数
//setTimeout(printHello, 2000);

//cleatTimeout(t):全局函数用于停止之前通过setTimeout()创建的定时器。参数t是通过setTimeout()函数创建的计算器。
//function printHello() {
    //console.log("Hello world!");
//}
//两秒后执行以上函数
//var t = setTimeout(printHello, 2000);
//清除定时器
//clearTimeout(t);

//执行结果：没有执行printHello方法

//setInterval(cb, ms): 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。返回一个代表定时器的句柄值。可以使用clearInterval(t)函数来清除定时器。setInterval()方法
//会不停的调用函数，直到cleatInterval()被调用或窗口被关闭。
function printHello() {
    console.log("Hello World!");
}
//两秒后执行以上函数
setInterval(printHello, 2000);






