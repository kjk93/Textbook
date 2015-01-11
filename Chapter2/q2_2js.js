//Need to add square root to problem to speed it up (See code at end of chapter)
function primeProof(){
	var primes = [];

	var ul = document.createElement('ul');

	var count = 0;
	while(count < 100){
		primes = addPrime(primes);
		if(primes[primes.length - 1] > 3){
			count++;
		}
	}

	var less3 = true;
	var pos = 0;
	while(less3){
		if (primes[pos] < 3) {
			pos++;
		}
		else if(primes[pos] == 3){
			pos++;
			less3 = false;
		}
		else{
			console.log("3 not in array");
		}
	}

	var proof = true;
	for(i = 0; i < 100; i++){
		if(!plus1Form(primes[pos])){
			if(!plus5Form(primes[pos]) && plus5Form(primes[pos]) != 0){
				var t =document.createTextNode("Proof is false");
				proof = false;
			}
			else{
				var t = document.createTextNode("6(" + plus5Form(primes[pos]) + ")+5 = " + primes[pos]);
			}
		}
		else{
			var t = document.createTextNode("6(" + plus1Form(primes[pos]) + ")+1 = " + primes[pos]);
		}
		var li = document.createElement('li');
		li.appendChild(t);
		ul.appendChild(li);
		pos++;
	}
	var t = document.createTextNode("The proof is " + proof);
	var p = document.createElement('p');
	document.body.appendChild(p);
	var p = document.createElement('p');
	p.appendChild(ul);
	document.body.appendChild(p);
}

function addPrime(array){
	if(array.length == 0){
		return [1];
	}
	var num = array[array.length - 1] + 1;//Next Num
	var find = true;
	if(num == 2){
		find = false;
		array.push(num);
	}
	else if(num%2 == 0){
		num++;
	}
	while(find){
		var div = num - 1;
		var flag = true;
		while(flag && div > 1){
			if(num%div == 0){
				flag = false;
			}
			else{
				div--;
			}
		}
		if(div == 1){
			find = false;
			array.push(num);
		}
		else{
			num = num + 2;//speed up the process
		}
	}
	return array;
}

function plus1Form(num){
	var test = 0;
	while(test < num){
		if(((6*test) + 1) == num){
			return test;
		}
		else{
			test++;
		}
	}
	return false;
}

function plus5Form(num){
	var test = 0;
	while(test < num){
		if(((6*test) + 5) == num){
			return test;
		}
		else{
			test++;
		}
	}
	return false;
}