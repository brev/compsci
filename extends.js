var SuperClass = function() {
	this.fname = 'Super';
};

var SubClass = function() {
	this.lname = 'Sub';
};
SubClass.prototype = new SuperClass();

var sup = new SuperClass();
var sub = new SubClass();
console.log(sup.fname, sup.lname);	// Super undefined
console.log(sub.fname, sub.lname);	// Super Sub

