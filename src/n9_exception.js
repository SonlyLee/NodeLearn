var http = require('http');
var url = require('url');
var router = require('./router');
var exception = require('./models/Exception');

http.createServer(function(req,res){
	if(req.url!=="/favicon.ico"){
		var pathname = url.parse(req.url).pathname;
	    pathname = pathname.replace(/\//,'');  //替换路由前面的/,如果没有,就是根目录下
	    try{
	    	//router[pathname](req,res);
	    	data = exception.expfun(0);
	    	res.write(data);
	    	res.end();
	    }catch(err){     //这里的err是TypeError: router[pathname] is not a function
	    	console.log('aaaa='+err);
	    	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	    	res.write(err.toString());
	    	res.end();
	    }
	    console.log('server执行完毕');
	}    
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');