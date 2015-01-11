function oddSquares(){
	var proof = true;
	for(var i = 1; i <= 100; i++){
		if(longWay(i) != shortWay(i)){
			proof = false;
			var failed = i;
		}
	}
	if(proof){
		var t = document.createTextNode("The proof is true for numbers 1 - 100");
	}
	else{
		var t = document.createTextNode("The proof is false by the number " + failed);
	}
	var p = document.createElement('p');
	p.appendChild(t);
	document.body.appendChild(p);
}

function longWay(num){
	var sum = 0;
	for(var i = num; i > 0; i--){
		sum = sum + (((2*i) - 1) * ((2*i) - 1));
	}
	return sum;
}

function shortWay(num){
	return (num*((4*(num*num))-1))/3;
}
