//I want to add a function to find the sum of divisors
//Need to add to webpage

function abundentOdd(){
	//varify 945 is smallest odd
	var num = 943
	var varify = true;

	//Varify Abundent Odds
	while(num > 0 && varify){
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
		if(sum > num){
			var t = document.createTextNode("The abundent odd is " + num);
			var p = document.createElement('p');
			p.appendChild(t);
			document.body.appendChild(p);
			varify = false;
		}

		num = num - 2;
	}
	if(varify){
		var t = document.createTextNode("Has been varified");
		var p = document.createElement('p');
		p.appendChild(t);
		document.body.appendChild(p);
	}

	//Find next 100 Abundent Odds
	num = 947
	var numCount = 0;
	var abunds = [];
	while(numCount < 100){
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

		if(sum > num){
			console.log("The abundent number is " + num + ", the sum is " + sum);
			abunds.push(num);
			numCount++;
		}
		num = num + 2;
	}
	var ol = document.createElement('ol');
	for(var i = 0; i < abunds.length; i++){
		var ts = document.createTextNode(abunds[i]);
		var li = document.createElement('li');
		li.appendChild(ts);
		ol.appendChild(li);
	}

	document.body.appendChild(ol);

//	console.log(abunds.toString());
}