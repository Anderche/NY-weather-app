/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=11201,us&appid=aef5130a1d6508e4812ab49cf12ccc68&units=imperial', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        // console.log(cObj);
				document.getElementById('location').innerHTML = cObj.name;
				document.getElementById('weather').innerHTML = cObj.weather[0].description;
				document.getElementById('temperature').innerHTML = cObj.main.temp;
				document.getElementById('desc').innerHTML = "Wind Speed: "+cObj.wind.speed;

    } //end if
}; //end function




// GET THE FORECARST
weatherForecast.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?zip=11201,us&appid=aef5130a1d6508e4812ab49cf12ccc68&units=imperial', true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);

	// DAY 01
	// DATE in format M-DD
	var date_raw = fObj.list[0].dt_txt;
	date_raw = date_raw.substring(5,11);
	document.getElementById('r1c1').innerHTML=date_raw;

	// WEATHER ICON
	var icon_code = fObj.list[0].weather[0].icon;
	var icon_path = "http://openweathermap.org/img/w/"+icon_code+".png";
	document.getElementById('r1c2').src=icon_path;	

	// TEMPERATURE MINIMUM
	document.getElementById('r1c3').innerHTML = fObj.list[0].main.temp_min+"&deg";
	document.getElementById('r1c4').innerHTML = fObj.list[0].main.temp_max+"&deg";

	// DAY 02
	// DATE in format M-DD
	var date_raw = fObj.list[8].dt_txt;
	date_raw = date_raw.substring(5,11);
	document.getElementById('r2c1').innerHTML=date_raw;

	// WEATHER ICON
	var icon_code = fObj.list[8].weather[0].icon;
	var icon_path = "http://openweathermap.org/img/w/"+icon_code+".png";
	document.getElementById('r2c2').src=icon_path;	

	// TEMPERATURE MINIMUM
	document.getElementById('r2c3').innerHTML = fObj.list[8].main.temp_min+"&deg";
	document.getElementById('r2c4').innerHTML = fObj.list[8].main.temp_max+"&deg";
	
	// DAY 03
	// DATE in format M-DD
	var date_raw = fObj.list[16].dt_txt;
	date_raw = date_raw.substring(5,11);
	document.getElementById('r3c1').innerHTML=date_raw;

	// WEATHER ICON
	var icon_code = fObj.list[16].weather[0].icon;
	var icon_path = "http://openweathermap.org/img/w/"+icon_code+".png";
	document.getElementById('r3c2').src=icon_path;	

	// TEMPERATURE MINIMUM
	document.getElementById('r3c3').innerHTML = fObj.list[16].main.temp_min+"&deg";
	document.getElementById('r3c4').innerHTML = fObj.list[16].main.temp_max+"&deg";

	// TEMPERATURE MAXIMUM

} //end if
}; //end function











