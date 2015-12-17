var $submitbutton = $('#submitButton');
loadOptions();

$submitbutton.on('click', function() {
	console.log('Submit');
	
	var return_to = getQueryParam('return_to', 'pebblejs://close#');
	document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
});

function loadOptions(){
	var $digitalToggle = $("#digitalToggle");
	var $dcVibeToggle = $("#dcVibeToggle");
	var $rcVibeToggle = $("#rcVibeToggle");
	var $capSlider = $("#capSlider");
	var $pointyToggle = $("#pointyToggle");
	var $endToggle = $("#endToggle");
	var $lockToggle = $("#locktoggle");
	
	var $sunday = $("#sunday");
	var $monday = $("#monday");
	var $tuesday = $("#tuesday");
	var $wednesday = $("#wednesday");
	var $thursday = $("#thursday");
	var $friday = $("#friday");
	var $saturday = $("#saturday");
	
	console.log($sunday.val());
	
	if(localStorage.digitalToggle){
		console.log("Loaded things");
		$digitalToggle[0].checked = localStorage.digitalToggle;
		$dcVibeToggle[0].checked = localStorage.dcVibeToggle;
		$rcVibeToggle[0].checked = localStorage.rcVibeToggle;
		$capSlider[0].value = localStorage.capSlider;
		$pointyToggle[0].checked = localStorage.pointyToggle;
		$endToggle[0].checked = localStorage.endToggle;
		$lockToggle[0].checked = localStorage.lockToggle;
		$sunday.val(localStorage.sunday);
		$monday.val(localStorage.monday);
		$tuesday.val(localStorage.tuesday);
		$wednesday.val(localStorage.wednesday);
		$thursday.val(localStorage.thursday);
		$friday.val(localStorage.friday);
		$saturday.val(localStorage.saturday);
	}
}

function getAndStoreConfigData(){
	var $digitalToggle = $("#digitalToggle");
	var $dcVibeToggle = $("#dcVibeToggle");
	var $rcVibeToggle = $("#rcVibeToggle");
	var $capSlider = $("#capSlider");
	var $pointyToggle = $("#pointyToggle");
	var $endToggle = $("#endToggle");
	var $lockToggle = $("#locktoggle");
	
	var $sunday = $("#sunday");
	var $monday = $("#monday");
	var $tuesday = $("#tuesday");
	var $wednesday = $("#wednesday");
	var $thursday = $("#thursday");
	var $friday = $("#friday");
	var $saturday = $("#saturday");
	
	var options = {
		digitalToggle: $digitalToggle[0].checked,
		dcVibeToggle: $dcVibeToggle[0].checked,
		rcVibeToggle: $rcVibeToggle[0].checked,
		capSlider: $capSlider[0].value,
		pointyToggle: $pointyToggle[0].checked,
		endToggle: $endToggle[0].checked,
		lockToggle: $lockToggle[0].checked,
		sunday: $sunday.val(),
		monday: $monday.val(),
		tuesday: $tuesday.val(),
		wednesday: $wednesday.val(),
		thursday: $thursday.val(),
		friday: $friday.val(),
		saturday: $saturday.val()
	}
	
	localStorage.setItem("digitalToggle", options.digitalToggle);
	localStorage.setItem("dcVibeToggle", options.dcVibeToggle);
	localStorage.setItem("rcVibeToggle", options.rcVibeToggle);
	localStorage.setItem("capSlider", options.capSlider);
	localStorage.setItem("pointyToggle", options.pointyToggle);
	localStorage.setItem("endToggle", options.endToggle);
	localStorage.setItem("lockToggle", options.lockToggle);
	localStorage.setItem("sunday", options.sunday);
	localStorage.setItem("monday", options.monday);
	localStorage.setItem("tuesday", options.tuesday);
	localStorage.setItem("wednesday", options.wednesday);
	localStorage.setItem("thursday", options.thursday);
	localStorage.setItem("friday", options.friday);
	localStorage.setItem("saturday", options.saturday);
	
	return options;
}

function getQueryParam(variable, defaultValue){
	var query = location.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++){
		var pair = vars[i].split('=');
		if (pair[0] === variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return defaultValue || false;
}