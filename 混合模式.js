function Person(opts){
	this.name=opts.name
	this.sayname =function(){
		console.log(this.name)
	}
	Person.prototype.sayage = function(){
		console.log(this.age)
	}
}
var p2 =new Person({name:'a',age:10})

function Student(opts){
	Person.call(this,{name:'b',age:12})
	this.num = num
}
Student.prototype = Object.create(Person.prototype)
//创建一个空对象将被继承的原型对象付给空对象的原型，这样在下面给student的原型上添加
// 方法时不会改变被继承的原型对象
student.prototype.sayNum=function(){
	console.log(this.num)
}
var student1 = new Student({num:1})

//Object.create方法实现
function create(proto){
	function obj(){}//对象中只有__proto__,没有prototype，相反，构造函数上有prototype
	//两者指向同一个原型对象
	obj.prototype = proto//proto为要继承的原型对象
	return new obj()
}






