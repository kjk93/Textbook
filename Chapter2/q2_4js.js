function oddSquares(){
	var proof = true;
	for(var i = 1; i <= 100; i++){
		if(longWay(i) != shortWay(i)){
			proof = false;
		}
		else{
			console.log(i + " passed");
		}
	}
	console.log(proof);
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