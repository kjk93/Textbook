function properFraction(){
	var fracTop = document.getElementById("fracTop").value;
	var fracBot = document.getElementById("fracBot").value;

	var toPrint = fracs(fracTop, fracBot);

	var p = document.createElement("P");
	var t = document.createTextNode(fracTop + "/" + fracBot + " is " + toPrint);
	p.appendChild(t);
	document.body.appendChild(p);
}

function fracs(fracTop, fracBot){
	var longFrac = "";
	var shortFrac = "";
	var count = 0;

	for(var i = 0; i < fracTop; i++){
		longFrac = longFrac + "1/" + fracBot;
		count++;
		if( i < fracTop - 1){
			longFrac = longFrac + " + ";
		}
	}

	if (fracBot%2 == 0){//if fraction bottom is even
		var part = 2;
		var sum = 0;
		while(part <= fracBot && sum < fracTop){
			shortFrac = shortFrac + "1/" + part;
			sum = sum + (count / part);
			part = part*2;
			if(sum < fracTop - 1){
				shortFrac = shortFrac + " + ";
			}
		}

		return shortFrac;
	}
	else{
		var part = 3;
		var sum = 0;
		while(part <= fracBot && sum < fracTop){
			shortFrac = shortFrac + "1/" + part;
			sum = sum + (count / part);
			part = part*2;
			if(sum < fracTop - 1){
				shortFrac = shortFrac + " + ";
			}
		}

		return shortFrac;
	}

	//return longFrac;
}

function shortFrac(fracTop, fracBot){
	var shortFrac = "";



}