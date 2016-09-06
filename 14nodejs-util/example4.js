/**
 * Created by wzwang on 2016/9/6.
 */

var util = require('util');

util.isRegExp(/some regexp/)
//true

util.isRegExp(new RegExp('another regexp'))
//true

util.isRegExp({});
//false


