var http = require('http');

http.createServer(function(req,res){
	if(req.url!=="/favicon.ico"){
		res.writeHead(200,{'Content':'text/html;charset=utf-8'});
	    console.log("访问");
	    res.write('hello world!');
	    res.end();
	}    
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');