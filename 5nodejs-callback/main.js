/**
 * Created by wzwang on 2016/8/30.
 */

//part1:����һ��һ��ִ�У�˳�����
//var fs = require("fs");
//var data = fs.readFileSync("input.txt");
//console.log(data.toString());
//console.log("����ִ�н���~");

//part1ִ�н����
//    ����̳̹�����ַ��www.runoob.com
//    ����ִ�н�����

//part2:�첽����
var fs = require("fs");
fs.readFile("input.txt", function (err, data) {
    if (err) {
        return console.log("err:" + err);
    }
    console.log("data:" + data.toString());
});
console.log("����ִ�н���");

//part2ִ�н����
//����ִ�н�����
//����̳̹�����ַ��www.runoob.com
//��Ҫ��Ҫ��utf-8��
