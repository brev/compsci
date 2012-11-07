// between O(n * log n) and O(n^2)

var quickSort = function(lst) {
	var max = lst[0],
			min = lst[0];
	for(i=0; i<lst.length; i++) {
		if(lst[i] > max) max = lst[i];
		if(lst[i] < min) min = lst[i];
	}
	var mid = parseInt((max + min) / 2);
	
	var less = [],
			more = [];
	for(i=0; i<lst.length; i++) {
		if(lst[i] < mid) {
			less.push(lst[i]);
		}
		else {
			more.push(lst[i]);
		}
	}
	
	if(less.length > 2) less = quickSort(less);	
	if(more.length > 2) more = quickSort(more);	
	return less.concat(more);
}

var list = [1, 10, 11, 2, 5, 3, 4, 6, 16, 22, 28, 21, 13 ];
console.log(list);
console.log(quickSort(list));

