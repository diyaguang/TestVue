var mongoose = require('mongoose');
var url = 'mongodb://root:96777@39.105.102.17:27017/TestVue';
mongoose.connect(url);
module.exports = mongoose;  //链接数据库
