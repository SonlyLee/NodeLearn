var optfile = require('./models/optfile.js');
var url = require('url');
var querystring = require('querystring');  //post需要导入

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
		//get方式接收参数
		/*var rdata = url.parse(req.url,true).query;
		console.log(rdata);
		if(rdata['email']!=undefined){
			console.log(rdata['email']);
			console.log(rdata['pwd']);
		}*/
		//post方式提交参数
        var post = '';   //定义一个post变量，用于暂存请求体的信息。
        req.on('data',function(chunk){  //进行事件监听
        	post +=  chunk;
        });
        //异步
        req.on('end',function(){  //end就是把所有的参数都接收完毕了,再进行以下的事情
        	post = querystring.parse(post);
        	// console.log('收到参数:'+post['email']+'\n');
        	var arr = ['email','pwd'];
        	//recall = getRecall(req,res);
        	function recall(data){
        	   dataStr = data.toString();
        	   for(var i=0;i<arr.length;i++){
        	   	    re = new RegExp("{"+arr[i]+"}","g");
        	   	    dataStr = dataStr.replace(re,post[arr[i]]);
        	   }
               res.write(dataStr );
               res.end();
            }
	        optfile.readfile('./views/login.html',recall);
        })

		// recall = getRecall(req,res);
	    // optfile.readfile('./views/login.html',recall);
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