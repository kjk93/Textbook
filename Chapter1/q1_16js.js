//Program cannot be run on normal computer

function findPerfects(){
	console.log("start");

	//console.log(Number.isSafeInteger(33550336));

	var num = 33550330;
	var trueCount = 0;
	var perfects = []
	while(trueCount < 1){
		num++;
		var div = num - 1;
		var divisors = [];

		//find the divisors
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
		//console.log("Num = " + num + ", Sum = " + sum);
		if(sum == num){
			trueCount++;
			perfects.push(num);
			//console.log(num + " is perfect");
		}
	}
	 var t = document.createTextNode("The next perfect number is " + perfects);
	 var p = document.createElement("p");
	 p.appendChild(t);
	 document.body.appendChild(p);
	console.log("end");
}

