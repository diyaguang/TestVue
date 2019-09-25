var path = require('path');

var config = {
    entry: {
        main: './mail'
    },
    output: {
        path: path.join(__dirname,'./dist'),
        publicPath: '/dist/',
        filaname: 'main.js'
    }
};
module.exports = config;