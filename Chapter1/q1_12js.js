//I want to add some code to display the additions
//Code takes about 10 seconds to run
function squareSum(){

	var squares = [];
	var numerator = 0;
	var denominator = 1000000;
	
	for(var i = 1; i < 1000001; i++){
		var check = false;
		var squPos = squares.length - 1;
		var currentNum;
		var numberOfNums = 0;
		var sum = 0;
		//var nums = [];
		while(!check){
			while(i > squares[squares.length - 1] || squares.length == 0){
				squares = addSquare(squares);
				squPos++;
			}

			currentNum = squares[squPos];

			if(currentNum + sum < i){
				sum = sum + currentNum;
				numberOfNums++;
				//nums.push(currentNum);
			}
			else if(currentNum + sum > i){
				squPos--;
			}
			else{//current num == sum
				sum = sum + currentNum;
				numberOfNums++;
				//nums.push(currentNum);
				check = true;
				if(numberOfNums <= 2){
					numerator++;
					//printAddition(nums, i);
				}
			}
		}
	}
	
	var t = document.createTextNode("The ratio is \n" + numerator + "/" + denominator);
	var p = document.createElement('p');
	p.appendChild(t);
	document.body.appendChild(p);
}

function addSquare(array){
	var square;
	var last = array.length + 1;//the next oblong number to be added (skip 1)
	square = last*last;
	array.push(square);
	return array;
}

//If you want to see the additions
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
	console.log(addString);
}