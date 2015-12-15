function setScheduleDisplay(display){
	var custom1 = document.getElementById("custom1");
	var custom2 = document.getElementById("custom2");
	if(display === 1){
		custom1.style.display = "block";
		custom2.style.display = "none";
	} else {
		custom1.style.display = "none";
		custom2.style.display = "block";
	}
}