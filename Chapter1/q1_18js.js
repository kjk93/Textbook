function semiPerfect(){
	var num = document.getElementById("num").value;
	//Test for abundence
	var div = num - 1;
	var divisors = [];
	var sum = 0;
	var abund = false;
	var semi = false;

	while(div > 0){
		if(num%div == 0){
			divisors.push(div);
		}
		div--;
	}

	for(var i = 0; i < divisors.length; i++){
		sum = sum + divisors[i];
	}

	if(sum > num){
		abund = true;
		sum = 0;//reset sum
		var sums = [];
		var divPos = 0;
		var currentNum = divisors[divPos];
		while(divPos >= 0 && semi == false){
			if(sum + currentNum < num){
				sum = sum + currentNum;
				sums.push(currentNum);
				divPos++;
			}
			else if(sum + currentNum == num){
				semi = true;
				sums.push(currentNum);
				sum = sum + currentNum;
			}
			else{//sums + currentNum > num
				divPos++;
			}
			currentNum = divisors[divPos];
		}
	}
	else{
		var p = document.createElement('p');
		var t = document.createTextNode("The number is not abundent");
		p.appendChild(t);
		document.body.appendChild(p);
		t = document.createTextNode("The sum of divisors of " + num + " is " + sum);
		p = document.createElement('p');
		p.appendChild(t);
		document.body.appendChild(p);
	}
	if(abund){
		if(semi){
			var t = document.createTextNode("The number is semi-perfect");
			var p = document.createElement('p');
			p.appendChild(t);
			document.body.appendChild(p);
			t = document.createTextNode("The divisors " + printAddition(sums, num));
			p = document.createElement('p');
			p.appendChild(t);
			document.body.appendChild(p);
		}
		else{
			var t = document.createTextNode("The number is not semiPerfect");
			var p = document.createElement('p');
			p.appendChild(t);
			document.body.appendChild(p);
		}
	}
}

function printAddition(nums, total){
	var addString = "";
	for(i = 0; i < nums.length; i++){
		if(i > 0){
			addString = addString + " + " + nums[i];
		}
		else{
			addString = "" + nums[i];
		}	
	}
	addString = addString +  " = " + total;
	return addString;
}