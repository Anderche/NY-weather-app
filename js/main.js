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
        console.log(cObj);
				document.getElementById('location').innerHTML = cObj.name;
				document.getElementById('weather').innerHTML = cObj.weather[0].description;
				document.getElementById('temperature').innerHTML = cObj.main.temp;
				document.getElementById('desc').innerHTML = "Wind Speed: "+cObj.wind.speed;

    } //end if
}; //end function






 



// GET THE FORECARST
// weatherForecast.open('', '', true);
weatherForecast.responseType = 'text'; 
// weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
	
} //end if
}; //end function


