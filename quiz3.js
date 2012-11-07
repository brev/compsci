// list of unsorted integers, search for all pairs that add up to a const

var consty = 16;

var list = [ 8, 7, 9, 10, 6, 5, 4, 12 ];

// O(n^2)
for(i=0; i<list.length; i++) {
	for(j=0; j<list.length; j++) {
		if(list[i]+list[j] == consty) {
			console.log(list[i],list[j]);		
		}
	}
}

// O(log(n))
	// sort, then binary search ?

console.log(' ');

// O(n) hash
var hash = {};
for(i=0; i<list.length; i++) {
	hash[list[i]] = list[i];
}
for(i in hash) {
	var me = hash[i];
	if(hash[consty - me]) {
		console.log(me, hash[consty - me]);
	}
}

