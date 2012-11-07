// with unsorted list of integers, find all values whose
// square root is also in the list
// O(n)

var list = [ 35, 3, 6, 5, 9, 7, 25 ];
console.log(list);

var squares = {};

for(i=0; i<list.length; i++) {
	squares[list[i] * list[i]] = list[i] * list[i];
}

for(i=0; i<list.length; i++) {
	if(squares[list[i]]) {
		console.log('found ' + list[i]);
	}
}
