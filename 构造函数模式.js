function Person(){
	this.name=opts.name
	this.sayname =function(){
		console.log(this.name)
	}
	Person.prototype.sayage = function(){
		console.log(this.age)
	}
}
var p2 =new Person({name:a,age:10})