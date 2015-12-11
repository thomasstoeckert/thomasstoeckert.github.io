function setDisplay(display){
	var custom1 = document.getElementById("custom1");
	var custom2 = document.getElementById("custom2");
	if(display === 1){
		custom1.hidden = false;
		custom2.hidden = true;
	} else {
		custom1.hidden = true;
		custom2.hidden = false;
	}
}