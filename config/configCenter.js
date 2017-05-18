var path = require('path');

var config = require(path.resolve('./config', 'config_' + (process.env.NODE_ENV == 'production' ? 'production' : 'development') + '.js'));

module.exports = config;
