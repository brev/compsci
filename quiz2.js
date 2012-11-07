// from array of numbers, find distinct
// O(n)

var list = [ 5, 6, 5, 10, 12, 10, 6, 15, 17, 20, 17, 21 ];

var hash = {};

for(i=0; i<list.length; i++) {
	if(! hash[list[i]]) hash[list[i]] = 1;
}

console.log(hash);
