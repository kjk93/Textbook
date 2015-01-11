function findOblong(){
	var number = 0;
	var oblongs = new Array();
	var squares = new Array();
	var ol = document.createElement("ol");
	var p = document.createElement("p");

	for(var i = 0; i < 3; i++){
		var check = false;

		while(!check){
			number++;
			if(isOblong(number,oblongs)){
				if(isObSqProduct(number, oblongs, squares)){
					check = true;
				}
			}
		}
		var t = document.createTextNode(number);
		var li = document.createElement("li");
		li.appendChild(t);
		ol.appendChild(li);
	}

	p.appendChild(ol);
	document.body.appendChild(p);
}

function isOblong(num, array){
	var toReturn = false;
	while(num > array[array.length-1] || array.length == 0){
		addOblong(array);
	}
	for(var i = 0; i < array.length; i++){
		if(num == array[i]){
			toReturn = true;
		}
	}
	return toReturn;
}

function addOblong(array){
	var oblong;
	var last = array.length + 1;//the next oblong number to be added
	oblong = last * (last + 1);
	array.push(oblong);
	return array;
}

function addSquare(array){
	var square;
	var last = array.length + 2;//the next oblong number to be added (skip 1)
	square = last*last;
	array.push(square);
	return array;
}

function isObSqProduct(limit, oblongs, squares){
	while(oblongs[oblongs.length-1] < limit || oblongs.length == 0){//reduce the growth rate
		oblongs = addOblong(oblongs);
	}

	while(squares[squares.length-1] < limit || squares.length == 0){//redcuce the growth rate
		squares = addSquare(squares);
	}

	var loopCount = 0;

	for(var sqCount = 0; sqCount < limit - 1; sqCount++){
		loopCount++;
		for(var obCount = 0; obCount < limit - 1; obCount++){
			loopCount++;
			if (limit == oblongs[obCount] * squares[sqCount]){
				return true;
			}
			if(loopCount == 1100000){//To avoid numerous loops
				return false;
			}
		}
	}
	return false;
}