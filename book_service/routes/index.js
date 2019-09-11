var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var recommend = require('../models/recommend');
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


router.get('/showIndex',function (req,res,next) {
  recommend.findAll(function (err,getRecommend) {
    res.json({status:0,message:"获取推荐",data:getRecommend})
  })
});
router.get('/showRanking',function (req,res,next) {
  movie.find({movieMainPage:true},function (err,getMovies) {
    res.json({status:0,message:"获取主页",data:getMovies});
  })
});
router.get('/showArticle',function (req,res,next) {
  article.findAll(function (err,getArticles) {
    res.json({status:0,message:"获取主页",data:getArticles});
  })
});
router.post('/articleDetail',function (req,res,next) {
  if(!req.body.article_id){
    res.json({status:1,message:"文章ID出错"});
  }
  article.findByArticleId(req.body.article_id,function (err,getArticle) {
    res.json({status:0,message:"获取成功",data:getArticle});
  })
});
router.post('/showUser',function (req,res,next) {
  if(!req.body.user_id){
    res.json({status:1,message:"用户状态出错"})
  }
  user.findById(req.body.user_id,function (err,getUser) {
    res.json({status:0,message:"获取成功",data:{
        user_id: getUser._id,
        username: getUser.username,
        userMail: getUser.userMail,
        userPhone: getUser.userPhone,
        userStop: getUser.userStop
      }})
  })
});

module.exports = router;
