var util = require('util');

var TrieNode = function(val) {
	this.parent = null;
	this.value = val;
	this.children = [];
};
TrieNode.prototype.toString = function() {
	var str = [];	
	var n = this;	
	while(n) {
		str.push(n.value);	
		n = n.parent;	
	}
	return str.reverse().join('');
};

var b = new TrieNode('b');

var r = new TrieNode('r');
b.children.push(r);
r.parent = b;

var e = new TrieNode('e');
r.children.push(e);
e.parent = r;

var t = new TrieNode('t');
e.children.push(t);
t.parent = e;

var v = new TrieNode('v');
e.children.push(v);
v.parent = e;

console.log(util.inspect(b, true, 20));
console.log(t.toString());
console.log(v.toString());
