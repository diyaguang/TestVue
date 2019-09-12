var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var recommend = require('../models/comment');
var movie = require('../models/movie');
var article = require('../models/article');
var user = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mongooseTest',function (req,res,next) {
  mongoose.connect('mongodb://root:96777@39.105.102.17:27017/TestVue',{useNewUrlParser: true});
  mongoose.Promise = global.Promise;

  var Cat = mongoose.model('Cat',{name: String});
  var tom = new Cat({name: 'Tom'});
  tom.save(function (err) {
    if(err) {
      console.log(err);
    }else{
      console.log('success insert!');
    }
  });
  res.send('数据库链接测试页面')
});

module.exports = router;
