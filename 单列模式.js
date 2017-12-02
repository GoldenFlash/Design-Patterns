var people = (function(){
	var instance;
	function init(){
		 //define private methods and properties
		return{
			 //define public methods and properties
		};
	};
	return{
		createPeople:function(){
			if(!instance){
				instance = init();
			};
			return instance;
		}
	};
})();
var object1= people.createPeople()
var object2= people.createPeople()
//object1=object2
var people = function(){
	var instance ;
	var createInstance = function(){
		this.a=1;
		this.b=2;
	}
	return {
		init:function(){
			if(!instance){
				instance = new createInstance()
			}
			return instance;
		}
	}
}
var a = people();
var b1 = a.init();
var b2 = a.init();
