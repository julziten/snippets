function factorial(n) {
	var total = 1; 
	for (i = 1; i <= n; i++) {
		total = total * i; 
	}
	return total; 
}

factorial(4);
factorial(5);