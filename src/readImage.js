var http = require('http');
var url = require('url');
var optfile = require('./models/optfile.js');

http.createServer(function(req,res){
	if(req.url!=="/favicon.ico"){
		// res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
		res.writeHead(200,{'Content-Type':'image/jpeg'});   //输出的是二进制流
	    optfile.readImg('./image/haokan.jpg',res);
	}    
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');