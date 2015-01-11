function myTest(){
	var toAdd = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];

	var find = 986;
	var pos = toAdd.length - 1;
	var currentNum = toAdd[pos];

	var sums = [];

	var dif;
	var second = true;
		
	if(currentNum == find){
		sums.push(currentNum);
		console.log(currentNum + " is a triNum");
	}
	else{
		var flag = true;
		while(flag){//looking for 2 numbers to add together
			if(pos < 0){
				flag = false;
			}
			currentNum = toAdd[pos];
			//console.log("currentNum = " + currentNum);
			dif = find - currentNum;
			//console.log("dif = " + dif + ", num = " + currentNum + ", find = " + find + ", pos = " + pos);
			//pos--;

			if(dif > 0 && dif <= currentNum){
				//console.log("dif > 0 && dif < currentNum");
				var check = true;
				var i = 0;
				while(check){
					//console.log("checking, i = " + i);
					if(toAdd[i] == dif){
						console.log("found equal number " + toAdd[i]);
						console.log("pushing " + currentNum);
						sums.push(currentNum);
						console.log("pushing " + toAdd[i]);
						sums.push(toAdd[i]);
						check = false;
						flag = false;
						second = false;
					}
					else if(toAdd[i] > dif){
						console.log("next number exceeded " + toAdd[i]);
						check = false;
						pos--;
					}
					else{
						i++;
					}
				}
			}
			else if(dif > currentNum){//exit this loop
				//console.log("dif > currentNum");
				dif = find - toAdd[pos +1];
				console.log("pushing " + toAdd[pos+1]);
				sums.push(toAdd[pos + 1]);
				flag = false;
			}
			else if(dif == 0){//end process, solution found
				//console.log("dif == 0");
				flag = false;
				second = false;
				console.log("pushing " + currentNum);
				sums.push(currentNum);
			}
			else{//dif negative
				console.log("no case");
				pos--;
			}
			
		}
	}

	if(second){
		var firstDif = dif;
		var flag = true;
		pos = toAdd.length - 1;
		while(flag){
			console.log(pos);
			currentNum = toAdd[pos];
			console.log("currentNum " + currentNum);
			dif = firstDif - currentNum;
			console.log("dif = " + dif);
			var check = true;
			var i = 0;
			while(check){
				console.log("sums = " + sums.toString());
				if(toAdd[i] == dif){
					console.log("found equal number " + toAdd[i]);
					console.log("pushing currentNum" + currentNum);
					sums.push(currentNum);
					console.log("pushing add" + toAdd[i]);
					sums.push(toAdd[i]);
					check = false;
					flag = false;
				}
				else if(toAdd[i] > dif){
					console.log("dif = " + dif);
					console.log("next number exceeded " + toAdd[i]);
					pos--;
					check = false;
				}
				else{
					i++;
				}
			}
		}
	}
	console.log(sums.toString());
}