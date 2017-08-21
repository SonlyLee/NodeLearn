let d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth()+1);


//在ECMAScript部分node和js其实是一样的，比如数据类型，语法结构，类型定义
//在js中的顶层对象window，在node的顶层对象global


var a = 100;
console.log(global.a);   //undefined   a不是属于全局global下的属性，而是一个模块的东西。

//一个文件就是一个模块  每个模块都有自己的作用域  当使用var声明的一个变量，他并不是全局的，而是属于当前的模块下的

//关于全局底下的内置一个属性，__filename:当前文件被解析过后的绝对路径
console.log(__filename); 

//模块加载系统 提供一个require方法 
//require("模块"); 
/*
   模块加载机制：
       路径：
          绝对路径
          相对路径——同路径下的文件前面必须加上./，否则的话是加载node里面的核心模块，或者是第三方库
*/
/*
   模块加载规则：
        1首先按照加载的模块的文件名称进行查找
        2如果没有找到，则会在模块文件名称后面加上.js后缀，进行查找
        3如果还没有找到，则会在文件名称后加上.json的后缀，进行查找
        4如果还没有，则会在文件名称后面加上node后缀
*/
/*
   在一个模块中通过var定义的变量，某作用于范围是当前模块，外部不能够直接访问
   如果想一个模块能够放问另一个模块中定义的变量，可以：
        1把变量作为global对象的一个属性，但是不推荐
        2使用模块对象module(保存提供和当前模块有关的一些信息)，
             在这个module对象下有一个子对象，叫做exports，可以通过这个对象把一个模块中的局部变量对象进行提供访问
             var a = 1;
             module.exports.a = a;  现在这个a就可以在外部模块引用访问  
             exports和module.exports的指向是一样
*/

/*
   __filename：返回当前模块文件的解析后的绝对路径，该属性其实并非全局的，而是模块作用域下的
   __dirname：返回当前模块文件所在目录解析后的绝对路径，该属性也不是全局的，而是模块作用下的

    console.log(__filename);  //返回当前的文件
    console.log(__dirname);   //返回当前的文件夹
*/
/*
   process进程对象：
     process对象是一个全局对象，可以在任何地方都能访问，通过这个对象提供的属性和方法，可以对当前运行的程序的进程进行访问和控制
   argv: Array,一组包含命令行参数的数组（第一个node，第二个当前.js文件，接下来是传入参数）
   execPath：开启当前进程的绝对路径
   env：返回用户环境信息
*/
/*  
   process对象
      stdin、stdout:标准输入输出流(IO)
      stdin和stdout提供了操作输入数据和输出数据的方法，通常叫做IO操作
      stdin——标准输入流
      stdout——标准输出流
      //输出流
      function Log(data){
	      process.stdout.write(data);
      }
      Log("您好");   //您好
      
      //默认情况，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
      process.stdin.resume();
      //用于监听用户的输入数据
      process.stdin.on("data",function(chunk){
	       console.log("用户输入了:"+chunk);  //按回车键将用户输入的东西放在chunk，显示出来
      })
*/

/*
    Buffer类
       一个用于更好的操作数据流
       在操作文件或者网络数据的时候，其实操作的就是二进制数据流，Node提供了一个更加方便的去操作这种数据流的类Buffer，这是一个全局的类。 
       new Buffer(size)   创建Buffer对象，并未这个对象分配一个大小
       var bf = new Buffer("miaov","utf-8");
       console.log(bf);
       bf.write(要写入的字符串，偏移量，写入字符串的长度，写入字符串的编码);
*/