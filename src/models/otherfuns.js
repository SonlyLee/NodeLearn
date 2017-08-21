// function fun2(res){
// 	console.log("我是fun2");
// 	res.write("你好,我是fun2");
// }

// module.exports = fun2;  //这种方式只支持一个函数，如果是多个函数，就必须要用module.exports=function{....}
module.exports = {
    fun2:function(res){
		console.log("我是fun2");
		res.write("你好,我是fun2");
    },
    fun3:function(res){
    	console.log("我是fun3");
		res.write("你好,我是fun3");
    }
}