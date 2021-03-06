var EventCenter = (function(){
	var event = {};

	function on(evt,handler){
		events[evt] = events[evt]||[]//逻辑或第一个为true返回第二个
		events[evt].push({
			handler:handler
		});
	};
	function fire(evt,args){
		if(!events[evt]){
			return;
		};
		for(var i=0;i<events[evt].length;i++){
			events[evt][i].handler(args);
		};
	};
	return{
		on:on,
		fire:fire
	}
})();

EventCenter.on('my_event', function(data){
  console.log('my_event received...');
});
EventCenter.on('my_event', function(data){
  console.log('my_event2 received...');
});
EventCenter.fire('my_event');

//第二种实现方式
function Event(){
	this.events = {};
};

Event.prototype = {
	on:function (evt,callback){
		var this.events[evt] = this.events[evt]||[];
		events[evt].push({
			callback:callback
		});
	},
	fire:function (){
		var args = [].slice.apply(arguments);
		var evtype = args.shift();
		var arg = args;
		if(this.events[evtype]){
			this.events[evtype].forEach(function(callback){
				callback(arg)
			});
		};
	},
	off:function(evt){
		delete this.events[evt]
	}
};