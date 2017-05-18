'use strict';

var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./config/configCenter');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist'), {index: false}));//maxAge:3天 {index: false, maxAge:259200000}
app.use(express.static(path.join(__dirname, 'error'), {index: false}));

app.all('*', function(req, res, next) {
    // console.log(req.headers['user-agent']);
    // if (req.headers['user-agent'].indexOf('Baiduspider') > 0 ||     //简单粗暴点的话直接判断是否有bot或者spider字段可以支持大部分爬虫，但是这样不知道有没有副作用，需要记录所有user-agent下来统计下
    //     req.headers['user-agent'].indexOf('Googlebot') > 0 ||
    //     req.headers['user-agent'].indexOf('360Spider') > 0 ||
    //     req.headers['user-agent'].indexOf('HaoSouSpider') > 0 ||
    //     req.headers['user-agent'].indexOf('bingbot') > 0 ||
    //     req.headers['user-agent'].indexOf('Sosospider') > 0 ||
    //     req.headers['user-agent'].indexOf('sogou spider') > 0 ) {
    //     res.contentType ('html');
    //     res.sendfile('./dist/index4robot.html');
    // } else {
        res.header("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
        res.header("Pragma", "no-cache"); // HTTP 1.0.
        res.header("Expires", "0"); // Proxies.
        next();
    // }
});

app.get('*', require('./routes/index').entry);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.sendfile('./error/error.html');
});

if (app.get('env') === 'production') {
    module.exports = app; // 这是 4.x 默认的配置，分离了 app 模块,将它注释即可，上线时可以重新改回来
} else {
    var debug = require('debug')('server'); // debug模块
    app.set('port', process.env.PORT || config.port); // 设定监听端口

    //启动监听
    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port);
        debug('Express server listening on port ' + server.address().port);
    });
}
