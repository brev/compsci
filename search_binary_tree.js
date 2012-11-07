// no duplicates!
// O(log n)

var Node = function(opts) {
	this.parent = null;
	this.value = opts.value || null;
	this.left = opts.left || null;
  this.right = opts.right || null;
};
Node.prototype.fillParents = function(n) {
	var node = n || this;
	if(node.left) {	
		node.left.parent = node;
		this.fillParents(node.left);	
	}
	if(node.right) {	
		node.right.parent = node;
		this.fillParents(node.right);	
	}
};
Node.prototype.contains = function(val) {
	if(this.value == val) {
		return this.value;
	}
	else if((this.value < val) && this.right) {
		return this.right.contains(val);
	}
	else if((this.value > val) && this.left) {
		return this.left.contains(val);
	}
};
Node.prototype.toArray = function() {
	var ary = [];
	var f = function(n) {
		if(n.value) {
			ary.push(n.value);
		}
		if(n.left) {
			f(n.left);
		}
		if(n.right) {
			f(n.right);
		}
	};	
	f(this);	
	return ary;
};
Node.prototype.size = function() {
	return this.toArray().length;	
};
Node.prototype.max = function() {
	var node = this;	
	while(node.right) {
		node = node.right;	
	}
	return node.value;
};
Node.prototype.min = function() {
	var node = this;
	while(node.left) {
		node = node.left;
	}
	return node.value;
};
Node.prototype.add = function(val) {
};
Node.prototype.remove = function(val) {
}



var bintree = new Node({
	value: 8,
	left: new Node({
		value: 3,
		left: new Node({
			value: 1
		}),
		right: new Node({
			value: 6,
			left: new Node({
				value: 4,
			}),
			right: new Node({
				value: 7,
			})
		})
	}),
	right: new Node({
		value: 10,
		right: new Node({
			value: 14,
			left: new Node({
				value: 13
			})
		}) 
	})
});
bintree.fillParents();

console.log(bintree.contains(6));		// 6
console.log(bintree.contains(13));	// 13
console.log(bintree.contains(2));		// undefined

console.log(bintree.min());	// 1
console.log(bintree.max());	// 14

console.log(bintree.toArray());
console.log(bintree.size());	// 9

