var http = require('http');
var otherfun = require('./models/otherfuns');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
	if(req.url!=='/favicon.ico'){
        // fun1(res);  //本地函数
        // otherfun(res); //外部函数,如果是一个函数，就是用现在定义的名字
        otherfun.fun3(res);  //外部函数，如果是多个函数，就必须要用定义的名字.引入文件函数的名字
        otherfun['fun2'](res);  //可以用点调用方法，也可以用[]字符串形式
		res.end('');
	}
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');

//本地函数
function fun1(res){
	console.log('输出fun1:');
	res.write("hello,我是fun1!");
}