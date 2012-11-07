
var rec = function(i) {
	i++;
	console.log(i);
	if(i < 10000) {
		return rec(i);
	} else {
		return;
	}
}

rec(0);

