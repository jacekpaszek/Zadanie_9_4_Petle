function drawTree (k) {
  for (i = 0; i <= k; i++) {
  	var star = '';
  	for (j = 0; j < i; j++) {
  		star += '*';
  	};
  	console.log(star);
  }
}

drawTree (6);