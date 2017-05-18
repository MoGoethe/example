"use strict";

var request = require("request");
var config = require("../config/configCenter");

exports.isLogined = function(token, callback) {
	console.log(config.SERVERURL);
	request({
		method: "get",
		url: config.SERVERURL + "member/isLogined",
		headers: {
			'Authorization': token
		}
	}, function(err, res, body) {
		if(err) {
			callback(false);
			return;
		}

		var data = JSON.parse(body);
		if(data.status == 200) {
			callback(data.info);
		} else {
			callback(false);
		}
	});
};

exports.autoLogin = function(code, callback) {
	console.log(code);
	request({
		method: "get",
		url: config.SERVERURL + "member/autologin?code=" + code
	}, function(err, res, body) {
		if(err) {
			callback(false);
			return;
		}

		var data = JSON.parse(body);
		console.log("autoLogin", data);
		if(data.status == 200) {
			callback(data.info.isLogined, data.info.token, data.status);
		} else {
			callback(false, null, data.status);
		}
	});
};

exports.isOpenidExist = function(token, callback) {
	request({
		method: "get",
		url: config.SERVERURL + "member/isOpenidExist",
		headers: {
			'Authorization': token
		}
	}, function(err, res, body) {
		if(err) {
			callback(false);
			return;
		}

		var data = JSON.parse(body);
		if(data.status == 200) {
			callback(data.info);
		} else {
			callback(false);
		}
	});
};

exports.saveWxMember = function(token, code, callback) {
	request({
		method: "post",
		url: config.SERVERURL + "member/saveWxMember",
		form: {code: code},
		headers: {
			'Authorization': token
		}
	}, function(err, res, body) {
		if(err) {
			callback(null);
			return;
		}

		var data = JSON.parse(body);
		if(data.status == 200) {
			callback(data.info);
		} else {
			callback(null);
		}
	});
};