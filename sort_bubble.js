// O(n^2)
var list = [7,2,3,1,9,6,8];
console.log(list);
for(i=0; i<list.length; i++) {
	for(j=0; j<list.length; j++) {
		if(list[j] > list[j+1]) {
			var temp = list[j];
			list[j] = list[j+1];
			list[j+1] = temp;
		}
	}
}
console.log(list);
