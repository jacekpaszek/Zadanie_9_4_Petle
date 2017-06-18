function drawTree (k) {
  for (var i = 0; i < k; i++) {
    var line = '*';
    for (var j = 0; j < i; j++) {
      line += '*';
  	};
  	console.log(line);
  }
}

drawTree(3);