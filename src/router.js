var optfile = require('./models/optfile.js');

function getRecall(req,res){
   res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});	
   function recall(data){   //异步
        res.write(data);
        res.end();
   }
   return recall;
}
module.exports = {
	login:function(req,res){
		recall = getRecall(req,res);
	    optfile.readfile('./views/login.html',recall);
	},
	zhuce:function(req,res){
		recall = getRecall(req,res);
	    optfile.readfile('./views/zhuce.html',recall);
	},
	writefile:function(req,res){
		recall = getRecall(req,res);
	    optfile.writefile('./views/one.txt','我写入的文件值',recall);
	},
	showimg:function(req,res){
		res.writeHead(200,{'Content-Type':'image/jpeg'});
		optfile.readImg('./image/haokan.jpg',res);
	}
} 