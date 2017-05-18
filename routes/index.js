"use strict";

var path = require('path');
var fs = require('fs');
var config = require('../config/configCenter');
var loginService = require("../models/loginService");

var isWechatBrowser = function(req) {
    var ua = req.headers['user-agent'] ? req.headers['user-agent'].toLowerCase() : "";
    if(ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
};

exports.entry = function(req, res, next) {
    fs.exists(path.join(__dirname, '../dist', 'index.html'), function(exists) {
        if(exists) {
            enter(req, res, next);
        } else {
            next();
        }
    });
};

var enter = function(req, res, next) {
    console.log("entry");

    var code = req.query.code || ""; // 微信code
    var b = req.query.b || "userinfo"; //是否授权登录 base/userinfo
    var token = req.query.token ? req.query.token : null;

    var redirectUri = config.URL;
    if(req.originalUrl && req.originalUrl != '/') {
        redirectUri = config.URL + req.originalUrl;
    }
    console.log(req.originalUrl);
    while (redirectUri.indexOf("&") >= 0){
       redirectUri = redirectUri.replace("&", "%26");
    }

    console.log("code=" + code + ", token=" + token + ", redirectUri=" + redirectUri);

    if (token && token != "undefined" && token != "null") {
        res.cookie('token', token);
    } else if (req.cookies.token && req.cookies.token != "undefined" && token != "null") {
        token = req.cookies.token;
    }

    // res.sendFile(path.join(__dirname, '../dist', 'index.html'));

    console.log('token', token);
    loginService.isLogined(token, function(isLogined) {
        console.log("isLogined", isLogined);
        if (!isLogined) {
            // 未登录
            if(code) {
                // 若code存在则执行自动登录
                loginService.autoLogin(code, function(isSuccess, token, status) {
                    console.log("autoLogin", isSuccess, token, status);
                    if(status && status == 7000) {
                        // code已使用
                        redirectUri = redirectUri.replace(/\?code=[0-9a-zA-Z]+/, "");
                        redirectUri = redirectUri.replace(/%26code=[0-9a-zA-Z]+/, "");
                        redirectUri = redirectUri.replace(/code=[0-9a-zA-Z]+/, "");
                        redirectUri = redirectUri.replace(/%26state=[0-9a-zA-Z]+/, "");
                        redirectUri = redirectUri.replace(/state=[0-9a-zA-Z]+/, "");
                        console.log("code已使用", redirectUri);
                        if(isWechatBrowser(req)) {
                            // 微信内置浏览器 跳转获取code
                            var wechatURl;
                            if(b == "base") {
                                wechatURl = config.WECHAT_URL_BASE;
                            } else {
                                wechatURl = config.WECHAT_URL;
                            }

                            console.log(wechatURl.replace("{{}}", redirectUri));
                            res.writeHeader(302, {"Location": wechatURl.replace("{{}}", redirectUri)});
                            res.end();
                        }
                    } else {
                        if(token && token != "null" && token != "undefined") {
                            res.cookie('token', token);
                        }
                        res.sendFile(path.join(__dirname, '../dist', 'index.html'));
                    }
                });
            } else {
                if(isWechatBrowser(req)) {
                    // 微信内置浏览器 跳转获取code
                    var wechatURl;
                    if(b == "base") {
                        wechatURl = config.WECHAT_URL_BASE;
                    } else {
                        wechatURl = config.WECHAT_URL;
                    }

                    console.log(wechatURl.replace("{{}}", redirectUri));
                    res.writeHeader(302, {"Location": wechatURl.replace("{{}}", redirectUri)});
                    res.end();
                } else {
                    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
                }
            }
        } else {
            // 已登录直接跳转
            if(isWechatBrowser(req)) {
                // 微信内置浏览器，判断微信信息是否存在
                // if(c == "ch_zjez") {
                //     console.log("ch_zjez");
                //     res.sendFile(path.join(__dirname, '../dist', 'index.html'));
                // } else {
                    loginService.isOpenidExist(token, function(isExist) {
                        console.log("isExist", isExist);
                        if(isExist) {
                            res.sendFile(path.join(__dirname, '../dist', 'index.html'));
                        } else {
                            // 跳转获取code
                            if(code) {
                                loginService.saveWxMember(token, code, function(token) {
                                    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
                                });
                            } else {
                                var wechatURl;
                                if(b == "base") {
                                    wechatURl = config.WECHAT_URL_BASE;
                                } else {
                                    wechatURl = config.WECHAT_URL;
                                }

                                console.log(wechatURl.replace("{{}}", redirectUri));
                                res.writeHeader(302, {"Location": wechatURl.replace("{{}}", redirectUri)});
                                res.end();
                            }
                        }
                    });
                // }
            } else {
                res.sendFile(path.join(__dirname, '../dist', 'index.html'));
            }
        }
    });
};