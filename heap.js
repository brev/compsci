// easy to find max of data

var Heap = function(opts) {
	this.rootNode = opts.rootNode || null;
};
Heap.prototype.showAll = function(node) {
	var node = node || this.rootNode;
	console.log(node.value);
	if(node.left) this.showAll(node.left);	
	if(node.right) this.showAll(node.right);	
}
Heap.prototype.getMax = function() {
	return(this.rootNode.value);
}
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
}
Heap.prototype.insert = function(newNode) {
	if(newNode.value > this.rootNode.value) {
		var oldRoot = this.rootNode;
		this.rootNode = newNode;
		newNode.left = null;
		newNode.right = oldRoot;	
	}
	else {
	}
};

var Node = function(opts) {
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

h.insert(new Node({
	value: 141,
	left: null,
	right: null
}));
console.log(h);
console.log('max', h.getMax());
console.log('min', h.getMin());
h.showAll();
