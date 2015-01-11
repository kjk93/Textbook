function sumNumbers(){
	var triNumbers = [];
	var ol = document.createElement('ol');
	var p = document.createElement('p');

	for(j = 1; j <= 1000; j++){
		var pos = triNumbers.length - 1;
		var sums = [];
			//create the sums
			while(j > triNumbers[triNumbers.length - 1] || triNumbers.length == 0){
				triNumbers = addTriangle(triNumbers);
				pos++;
			}

			var currentNum = triNumbers[pos];
			var dif;
			var second = true;
				
			if(currentNum == j){
				sums.push(currentNum);
				
				second = false;
			}
			else{
				var flag = true;
				while(flag){//looking for 2 numbers to add together
					if(pos < 0){
						flag = false;
					}
					currentNum = triNumbers[pos];
				
					dif = j - currentNum;

					if(dif > 0 && dif <= currentNum){
						var check = true;
						var i = 0;
						while(check){
							
							if(triNumbers[i] == dif){
								
								sums.push(currentNum);
								
								sums.push(triNumbers[i]);
								check = false;
								flag = false;
								second = false;
							}
							else if(triNumbers[i] > dif){
								
								check = false;
								pos--;
							}
							else{
								i++;
							
							}
						}
					}
					else if(dif > currentNum){//exit this loop
						dif = j - triNumbers[pos +1];
						sums.push(triNumbers[pos + 1]);
						flag = false;
					}
					else if(dif == 0){//end process, solution found
						flag = false;
						second = false;						
						sums.push(currentNum);
					}
					else{//dif negative						
						pos--;
					}
				}
			}

			if(second){
				var count = 0;
				var firstDif = dif;
				var flag = true;
				pos = triNumbers.length - 1;
				while(flag){					
					currentNum = triNumbers[pos];					
					dif = firstDif - currentNum;								
					var check = true;
					var i = 0;
					while(check){						
						if(triNumbers[i] == dif){							
							sums.push(currentNum);							
							sums.push(triNumbers[i]);
							check = false;
							flag = false;
						}
						else if(triNumbers[i] > dif){					
							pos--;
							check = false;
						}
						else{
							i++;
							count++;							
							if(count > 500){							
								check = false;
								flag = false;
							}
						}
					}
				}
			}
		var t = document.createTextNode(printAdds(sums, j));
		var li = document.createElement('li');
		li.appendChild(t);
		ol.appendChild(li);
	}
	p.appendChild(ol);
	document.body.appendChild(p);
}

function addTriangle(array){
	if(array.length == 0){
		array.push(1);
	}
	else{
		var toAdd;
		toAdd = array[array.length - 1] + (array.length + 1);
		array.push(toAdd);
	}
	return array;
}

function printAdds(nums, sol){
	var addsString = "";
	for(var i = 0; i < nums.length; i++){
		if(i < nums.length - 1){
			addsString = addsString + nums[i] + " + ";
		}
		else{
			addsString = addsString + nums[i];
		}
	}
	addsString = addsString + " = " + sol;
	return addsString;
}

function stored(array, num){
	var toReturn = false;
	for(var i = 0; i < array.length; i++){
		if(array[i] == num){
			toReturn = true;
			i = array.length;
		}
		else if(array[i] > num){
			i = array.length;
		}
	}
	return toReturn;
}

function store(array, num){
	if(stored(array, num)){
		return array;
	}
	else{
		array.push(num);
	}
	return array;
}