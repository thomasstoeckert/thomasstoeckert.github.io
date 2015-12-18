var $submitbutton = $('#submitButton');
loadOptions();

$submitbutton.on('click', function() {
	console.log('Submit');
	
	var return_to = getQueryParam('return_to', 'pebblejs://close#');
	document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
});

function loadOptions(){
	var digitalToggle = document.getElementById('digitalToggle');
	var dcVibeToggle = document.getElementById('dcVibeToggle');
	var rcVibeToggle = document.getElementById('rcVibeToggle');
	var capSlider = document.getElementById('capSlider');
	var pointyToggle = document.getElementById('pointyToggle');
	var endToggle = document.getElementById('endToggle');
	var lockToggle = document.getElementById('locktoggle');
	
	var sunday = document.getElementById('sunday');
	var monday = document.getElementById('monday');
	var tuesday = document.getElementById('tuesday');
	var wednesday = document.getElementById('wednesday');
	var thursday = document.getElementById('thursday');
	var friday = document.getElementById('friday');
	var saturday = document.getElementById('saturday');
	
	if(localStorage["sunday"]){
		console.log("Found local information");
		digitalToggle.checked = localStorage["digitalToggle"];
		dcVibeToggle.checked = localStorage["dcVibeToggle"];
		rcVibeToggle.checked = localStorage["rcVibeToggle"];
		capSlider.value = localStorage["capSlider"];
		pointyToggle.checked = localStorage["pointyToggle"];
		endToggle.checked = localStorage["endToggle"];
		lockToggle.checked = localStorage["lockToggle"];
		sunday.value = localStorage["sunday"];
		monday.value = localStorage["monday"];
		tuesday.value = localStorage["tuesday"];
		wednesday.value = localStorage["wednesday"];
		thursday.value = localStorage["thursday"];
		friday.value = localStorage["friday"];
		saturday.value = localStorage["saturday"];
	}
}

function getAndStoreConfigData(){
	var digitalToggle = document.getElementById('digitalToggle');
	var dcVibeToggle = document.getElementById('dcVibeToggle');
	var rcVibeToggle = document.getElementById('rcVibeToggle');
	var capSlider = document.getElementById('capSlider');
	var pointyToggle = document.getElementById('pointyToggle');
	var endToggle = document.getElementById('endToggle');
	var lockToggle = document.getElementById('locktoggle');
	
	var sunday = document.getElementById('sunday');
	var monday = document.getElementById('monday');
	var tuesday = document.getElementById('tuesday');
	var wednesday = document.getElementById('wednesday');
	var thursday = document.getElementById('thursday');
	var friday = document.getElementById('friday');
	var saturday = document.getElementById('saturday');
	
	var options = {
		digitalToggle: digitalToggle.checked,
		dcVibeToggle: dcVibeToggle.checked,
		rcVibeToggle: rcVibeToggle.checked,
		capSlider: capSlider.value,
		pointyToggle: pointyToggle.checked,
		endToggle: endToggle.checked,
		lockToggle: lockToggle.checked,
		sunday: sunday.value,
		monday: monday.value,
		tuesday: tuesday.value,
		wednesday: wednesday.value,
		thursday: thursday.value,
		friday: friday.value,
		saturday: saturday.value
	}
	
	localStorage["digitalToggle"] = options["digitalToggle"];
	localStorage["dcVibeToggle"] = options["dcVibeToggle"];
	localStorage["rcVibeToggle"] = options["rcVibeToggle"];
	localStorage["capSlider"] = options["capSlider"];
	localStorage["pointyToggle"] = options["pointyToggle"];
	localStorage["endToggle"] = options["endToggle"];
	localStorage["lockToggle"] = options["lockToggle"];
	localStorage["sunday"] = options["sunday"];
	localStorage["monday"] = options["monday"];
	localStorage["tuesday"] = options["tuesday"];
	localStorage["wednesday"] = options["wednesday"];
	localStorage["thursday"] = options["thursday"];
	localStorage["friday"] = options["friday"];
	localStorage["saturday"] = options["saturday"];
	
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