function Person(){
	var name='v';
	var sayName = function(){
		console.log(this.name)
	}
	return{
		name:name,
		sayName:sayName
	}
}
var a =Person()//a得到的是一个对象
a.sayName()//{name:name,sayName:sayName}通过对象调用this指向return出来的对象也就是a

// 下面才是闭包
function Person(){
	return function say(){
		console.log(this)
	}
}
var a = Person();
a()//window this 指向window