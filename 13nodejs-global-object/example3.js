/**
 * Created by wzwang on 2016/9/6.
 */
process.on('exit', function(code) {
    //以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行~");
    }, 0);

    console.log("退出码为：", code);
});
console.log("程序执行结束");

//执行结果：
//程序执行结束
//退出码为：0