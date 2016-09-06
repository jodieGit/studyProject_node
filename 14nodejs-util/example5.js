/**
 * Created by wzwang on 2016/9/6.
 */
var util = require('util');

util.isDate(new Date());
//true

util.isDate(Date());
//false

util.isDate({})
//false

