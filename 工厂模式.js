function createPerson(opts){
	var person = {
		name:opts.name||'aaa'
	}
	person.sayName:function(){
		console.log(this.name)
	}
	return person
}
var p = createPerson({name:p1})