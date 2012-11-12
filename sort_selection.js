// O(n^2) max

var list = [ 1, 2, 3, 6, 5, 2, 9, 12, 11, 7, 15 ];
var min;

console.log(list);

for(i=0; i<list.length; i++) {
	min = i;
	for(j=i; j<list.length; j++) {
		if(list[j] < list[min]) {
			min = j;
		}
	}
	if(min > i) {
		var tmp = list[i];
		list[i] = list[min];
		list[min] = tmp;
	}
}

console.log(list);
