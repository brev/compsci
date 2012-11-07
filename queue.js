// FIFO = first in first out

var Queue = function() {
	this.q = [];
};
Queue.prototype.enqueue = function(val) {
	this.q.push(val);
};
Queue.prototype.dequeue = function() {
	return this.q.slice(0,1)[0];
};

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
console.log(q.dequeue());
