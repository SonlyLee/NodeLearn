var http = require('http');
var url = require('url');
var router = require('./router');

http.createServer(function(req,res){
	if(req.url!=="/favicon.ico"){
		var pathname = url.parse(req.url).pathname;
	    pathname = pathname.replace(/\//,'');  //替换路由前面的/,如果没有,就是根目录下
	    router[pathname](req,res);
	}    
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');