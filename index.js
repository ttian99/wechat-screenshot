var fs = require('fs');
var gm = require('gm');
gm('./res/bg.jpg')
	.draw('image Over 100, 100 300, 300 "./res/head.jpg"')
	.write('./out/wx.jpg', function(err) {
		if (!err) {
			console.log('done');
		} else {
			console.log(err.message || "出错了！");
		}
	});