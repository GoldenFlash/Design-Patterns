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