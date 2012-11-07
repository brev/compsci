// LIFO = last in first out

var Stack = function() {
	this.s = [];
};
Stack.prototype.push = function(val) {
	this.s.push(val);
};
Stack.prototype.pop = function() {
	return this.s.pop();
};

var s = new Stack();
s.push('a');
s.push('b');
s.push('c');
console.log(s.pop());
