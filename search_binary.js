// prereq: sorted!
// O(log n)

var bin_search = function(lst, val) {
	var mid = parseInt(lst.length / 2);
	var next;
	if(lst[mid] == val) {
		return lst[mid];
	}
	else if(lst[mid] > val) {
		return bin_search(lst.slice(0, mid), val);
	}
	else if(lst[mid] < val) {
		return bin_search(lst.slice(mid + 1, lst.length), val);	
	}
}

var list = [ 1, 2, 5, 7, 8, 12, 13, 14, 22 ];
console.log(bin_search(list, 21));	// undefined
console.log(bin_search(list, 22));	// 22
