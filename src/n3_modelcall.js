var http = require('http');
var User = require('./models/user.js');
var Teacher = require('./models/teacher.js');

http.createServer(function(req,res){
	if(req.url!=="/favicon.ico"){
		res.writeHead(200,{'Content':'text/html;charset=utf-8'});
		// user = new User(1,"Lee",20);
		teacher = new Teacher(1,"Lee",20);
		teacher.enter();
		teacher.teach(res);
	    res.end();
	}    
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');