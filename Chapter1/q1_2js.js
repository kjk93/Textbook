function checkSquare(){
	if(!!document.getElementById('answer') == true){
		document.getElementById('answer').remove();
		//document.removeChild(remove);
	}

	var num = document.getElementById("num").value;
	var square = false;

	if(num == 1){
		square = true;
	}

	for(var i = 1; i < num; i++){
		if(i*i == num){
			square = true;
			i = num;
		}
	}

	if (square == true){
		var p = document.createElement("P");
		var h = document.createElement("H2");
		var t = document.createTextNode(num + " is a square");
		h.appendChild(t);
		p.appendChild(h);
		p.setAttribute("id", 'answer');
		document.body.appendChild(p);
	}
	else{
		var p = document.createElement("P");
		var h = document.createElement("H2");
		var t = document.createTextNode(num + " is NOT a square");
		h.appendChild(t);
		p.appendChild(h);
		p.setAttribute("id", 'answer');
		document.body.appendChild(p);
	}
	
}