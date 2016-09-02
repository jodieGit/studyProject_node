/**
 * Created by wzwang on 2016/9/2.
 */
buf = new Buffer(26);
for(var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));//输出: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5));//输出：abcde
console.log(buf.toString('utf-8', 0, 5));//输出： abcde
console.log(buf.toString(undefined, 0, 5));//输出：abcde
