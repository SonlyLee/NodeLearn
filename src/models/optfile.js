var fs = require('fs');
module.exports = {
	readfile:function(path,recall){  //异步执行
       fs.readFile(path,function(err,data){
       	   if(err){
       	   	   console.log("没有找到");
       	   	   recall('文件不存在');
       	   }else{
       	   	   console.log(data.toString());
       	   	   recall(data);
       	   }
       });
       console.log('异步调用完毕!');
	},
	readfileSync:function(path){  //同步执行
       var data = fs.readFileSync(path,'utf-8');
       console.log('同步执行完毕！');
       return data;
	},
	writefile:function(path,data,recall){
		fs.writeFile(path,data,function(err){
			if(err){
				throw err;
			}
			console.log('文件保存成功!');
			recall('写文件成功!');
		})
	},
	writeFileSync:function(path,data){
		fs.writeFileSync(path,data);
		console.log("同步读取成功!");
	},
	readImg:function(path,res){
		fs.readFile(path,'binary',function(err,file){
			if(err){
				console.log(err);
				return;
			}else{
				res.write(file,'binary');
				res.end();
			}
		})
	}
}