//I want to add some code to display the divisors

function sumDivisors(){
	var num = document.getElementById("num").value;

	var sum = 0;
	var div = num - 1;
	var divisors = [];

	while(div > 0){
		if(num%div == 0){
			divisors.push(div);
		}
		div--;
	}

	for(var i = 0; i < divisors.length; i++){
		sum = sum + divisors[i];
	}

	var t = document.createTextNode("The sum of the proper divisors of " + num + " is " + sum);
	var p = document.createElement('p');
	p.appendChild(t);
	document.body.appendChild(p);
}