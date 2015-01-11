//I want to add a function to list the sums

function perfectOdds(){
	var varified = true;
	var count = 0;
	var num = 1;
	
	while(count < 1000 && varified){
		var div = num - 1;
		var divisors = [];

		while(div > 0){
			if(num%div == 0){
				divisors.push(div);
			}
			div--;
		}

		var sum = 0;

		for(var i = 0; i < divisors.length; i++){
			sum = sum + divisors[i];
		}

		if(sum == num){
			varified = false;
			console.log("The number " + num + " is perfect");
		}
		count++;
		num = num + 2;
	}

	if(varified){
		var t = document.createTextNode("None of the first 1000 odds are perfect");
	}
	else{
		var t = document.createTextNode("The number " + num + " is perfect");
	}

	var p = document.createElement('p');
	p.appendChild(t);
	document.body.appendChild(p);
}