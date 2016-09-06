/**
 * Created by wzwang on 2016/9/5.
 */

//exampl1
//exports.world = function() {
//    console.log('Hello world');
//}


//example2
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello =  function() {
        console.log("Hello " + name);
    }
};
module.exports = Hello;
