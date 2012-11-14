var Class = function() {
	this.name = 'classy';
};

console.log(Class.prototype);		//	{}
console.log(' ');

Class.prototype.say = function() {
	console.log('yo', this.name);
};

var inst = new Class();

console.log(inst);							// 	{ name: 'classy' }
console.log(Class);							//	[Function]
console.log(Class, inst.constructor, Class === inst.constructor);
console.log(Class.prototype);		//	{ say: [Function] }
console.log(' ');
