var util = require('util');

// easy to find max of data

var Heap = function(opts) {
	this.rootNode = opts.rootNode || null;
};
Heap.prototype.fillParents = function(node) {
	var n = node || this.rootNode;

	if(n.left) n.left.parent = n;
	if(n.right) n.right.parent = n;

	if(n.left) this.fillParents(n.left);
	if(n.right) this.fillParents(n.right);
};
Heap.prototype.showAll = function(node) {
	var node = node || this.rootNode;
	console.log(node.value);
	if(node.left) this.showAll(node.left);	
	if(node.right) this.showAll(node.right);	
};
Heap.prototype.getMax = function() {
	return(this.rootNode.value);
};
Heap.prototype.getMin = function(node) {
	var node = node || this.rootNode;	
	var min = node.value;
	if(node.left && (node.left.value < min)) {
		min = this.getMin(node.left);
	}
	if(node.right && (node.right.value < min)) {
		min = this.getMin(node.right);
	}
	return(min);
};
Heap.prototype.insert = function(newNode) {
	var n = this.rootNode;	
	while((newNode.value <= n.value) && n.left) {
		n = n.left;
	}
	if(n === this.rootNode) {
		var oldRoot = this.rootNode;
		this.rootNode = newNode;
		newNode.left = oldRoot;
		newNode.left.parent = newNode;	
	}
	else {
		var oldLeft = n;
		n.parent.left = newNode;
		newNode.left = oldLeft;	
	}
};

var Node = function(opts) {
	this.parent = null;	
	this.value = opts.value || null;
	this.left = opts.left || null;
	this.right = opts.right || null;
};



var h = new Heap({
	rootNode: new Node({
		value: 69,
		left: new Node({
			value: 11,
			left: new Node({
				value: 7,
				left: null,
				right: null
			}),
			right: new Node({
				value: 6,
				left: null,
				right: null	
			})	
		}),
		right: new Node({
			value: 4,
			left: null,
			right: null
		})
	})
});
h.fillParents();

h.insert(new Node({
	value: 141,
}));
h.insert(new Node({
	value: 68,
}));
console.log(util.inspect(h, true, 20));
console.log('max', h.getMax());
console.log('min', h.getMin());
h.showAll();
