var mongoose = require('../common/db')
var movie = new mongoose.Schema({
    movieName: String,
    movieImg: String,
    movieVideo: String,
    movieDownload: Number,
    movieTime: String,
    movieNumSuppose: Number,
    movieNumDownload: Number,
    movieMainPage: Boolean
})

var movieModel = mongoose.model('movie',movie);

movie.statics.findById = function (m_id,callBack) {
    this.find({movie_id:m_id,check:true},callBack);
};
movie.statics.findAll = function (callBack) {
    this.find({},callBack);
};
module.exports = movieModel;
