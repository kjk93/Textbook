function triangleNumbers(){
	var ol = document.createElement("ol");

	var number = 1;
	var count = 0;
	var check = 0;
	while(count < 100){

		var varify = false;
		while(!varify){
			//console.log("Before check");
			check = (number*(number + 1))/2;
			console.log(check);
			console.log("Is square is " + isSquare(check));
			if(isSquare(check)){
				varify = true;
			}
			console.log(number + "     " + count);
			number++;
		}
		console.log(count + " number is " + check);
		var li = document.createElement("li");
		var t = document.createTextNode(check);
		li.appendChild(t);
		ol.appendChild(li);
		count++;
	}

	document.body.appendChild(ol);
}

function isSquare(num){
	var n = Math.sqrt(num);
	if(n%1 == 0){
		return true;
	}
	else{
		return false;
	}
}