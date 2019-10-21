//////////Weather API 1/////////////////////////////////////////////////////////
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216', 
function(data) {

	var icon1 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var temp1 = data.main.temp + "&deg;";
	var weather_desc1 = data.weather[0].main;
	var city1 = data.name;



	$('.city1').append(city1);
	$('.icon1').attr('src', icon1);
	$('.weather-desc1').append(weather_desc1);
	$('.temp1').append(temp1);
});

//////////Weather AJAX 1
$(document).ready(function() {
	$("#btn1").click(function() {
		return getWeather1();
	});
});

function getWeather1() {
	$.ajax ({
		url: 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216',
		type: "GET",
		datatype: "jsonp",
		success: function(data) {
			var temp = showTemp1(data)
			var icon = showIcon1(data)
			var weather_desc = showDesc1(data)

			$(".temp1").html(temp);
			$('.icon1').attr('src', icon);
			$('.weather-desc1').empty().append(weather_desc);
		}
	});
}

function showIcon1(data) {
	var icon1 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	return icon1;
}

function showDesc1(data) {
	var weather_desc1 = data.weather[0].main;
	return weather_desc1;
}

function showTemp1(data) {
	var temp1 = data.main.temp + "&deg;";
	return temp1;
}
/////Automatic Refresh Rate1
setInterval(() => {
	getWeather1(); 
}, 15000);



//////////Weather API 2/////////////////////////////////////////////////////////
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=New%20York,%20US&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216', 
function(data) {

	var icon2 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var temp2 = data.main.temp + "&deg;";
	var weather_desc2 = data.weather[0].main;
	var city2 = data.name;



	$('.city2').append(city2);
	$('.icon2').attr('src', icon2);
	$('.weather-desc2').append(weather_desc2);
	$('.temp2').append(temp2);
});

//////////Weather AJAX 2
$(document).ready(function() {
	$("#btn2").click(function() {
		return getWeather2();
	});
});

function getWeather2() {
	$.ajax ({
		url: 'https://api.openweathermap.org/data/2.5/weather?q=New%20York,%20US&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216',
		type: "GET",
		datatype: "jsonp",
		success: function(data) {
			var temp = showTemp2(data)
			var icon = showIcon2(data)
			var weather_desc = showDesc2(data)

			$(".temp2").html(temp);
			$('.icon2').attr('src', icon);
			$('.weather-desc2').empty().append(weather_desc);
		}
	});
}

function showIcon2(data) {
	var icon2 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	return icon2;
}

function showDesc2(data) {
	var weather_desc2 = data.weather[0].main;
	return weather_desc2;
}

function showTemp2(data) {
	var temp2 = data.main.temp + "&deg;";
	return temp2;
}
/////Automatic Refresh Rate2
setInterval(() => {
	getWeather2(); 
}, 15000);



//////////Weather API 3/////////////////////////////////////////////////////////
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles,%20US&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216', 
function(data) {

	var icon3 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var temp3 = data.main.temp + "&deg;";
	var weather_desc3 = data.weather[0].main;
	var city3 = data.name;



	$('.city3').append(city3);
	$('.icon3').attr('src', icon3);
	$('.weather-desc3').append(weather_desc3);
	$('.temp3').append(temp3);
});

//////////Weather AJAX 3
$(document).ready(function() {
	$("#btn3").click(function() {
		return getWeather3();
	});
});

function getWeather3() {
	$.ajax ({
		url: 'https://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles,%20US&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216',
		type: "GET",
		datatype: "jsonp",
		success: function(data) {
			var temp = showTemp3(data)
			var icon = showIcon3(data)
			var weather_desc = showDesc3(data)

			$(".temp3").html(temp);
			$('.icon3').attr('src', icon);
			$('.weather-desc3').empty().append(weather_desc);
		}
	});
}

function showIcon3(data) {
	var icon3 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	return icon3;
}

function showDesc3(data) {
	var weather_desc3 = data.weather[0].main;
	return weather_desc3;
}

function showTemp3(data) {
	var temp3 = data.main.temp + "&deg;";
	return temp3;
}
/////Automatic Refresh Rate3
setInterval(() => {
	getWeather3(); 
}, 15000);



//////////Weather API 4/////////////////////////////////////////////////////////
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216', 
function(data) {

	var icon4 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var temp4 = data.main.temp + "&deg;";
	var weather_desc4 = data.weather[0].main;
	var city4 = data.name;



	$('.city4').append(city4);
	$('.icon4').attr('src', icon4);
	$('.weather-desc4').append(weather_desc4);
	$('.temp4').append(temp4);
});

//////////Weather AJAX 4
$(document).ready(function() {
	$("#btn4").click(function() {
		return getWeather4();
	});
});

function getWeather4() {
	$.ajax ({
		url: 'https://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216',
		type: "GET",
		datatype: "jsonp",
		success: function(data) {
			var temp = showTemp4(data)
			var icon = showIcon4(data)
			var weather_desc = showDesc4(data)

			$(".temp4").html(temp);
			$('.icon4').attr('src', icon);
			$('.weather-desc4').empty().append(weather_desc);
		}
	});
}

function showIcon4(data) {
	var icon4 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	return icon4;
}

function showDesc4(data) {
	var weather_desc4 = data.weather[0].main;
	return weather_desc4;
}

function showTemp4(data) {
	var temp4 = data.main.temp + "&deg;";
	return temp4;
}
/////Automatic Refresh Rate4
setInterval(() => {
	getWeather4(); 
}, 15000);


//////////Weather API 5/////////////////////////////////////////////////////////
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216', 
function(data) {

	var icon5 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var temp5 = data.main.temp + "&deg;";
	var weather_desc5 = data.weather[0].main;
	var city5 = data.name;



	$('.city5').append(city5);
	$('.icon5').attr('src', icon5);
	$('.weather-desc5').append(weather_desc5);
	$('.temp5').append(temp5);
});

//////////Weather AJAX 5
$(document).ready(function() {
	$("#btn5").click(function() {
		return getWeather5();
	});
});

function getWeather5() {
	$.ajax ({
		url: 'https://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216',
		type: "GET",
		datatype: "jsonp",
		success: function(data) {
			var temp = showTemp5(data)
			var icon = showIcon5(data)
			var weather_desc = showDesc5(data)

			$(".temp5").html(temp);
			$('.icon5').attr('src', icon);
			$('.weather-desc5').empty().append(weather_desc);
		}
	});
}

function showIcon5(data) {
	var icon5 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	return icon5;
}

function showDesc5(data) {
	var weather_desc5 = data.weather[0].main;
	return weather_desc5;
}

function showTemp5(data) {
	var temp5 = data.main.temp + "&deg;";
	return temp5;
}
/////Automatic Refresh Rate5
setInterval(() => {
	getWeather5(); 
}, 15000);



//////////Weather API 6/////////////////////////////////////////////////////////
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216', 
function(data) {

	var icon6 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var temp6 = data.main.temp + "&deg;";
	var weather_desc6 = data.weather[0].main;
	var city6 = data.name;



	$('.city6').append(city6);
	$('.icon6').attr('src', icon6);
	$('.weather-desc6').append(weather_desc6);
	$('.temp6').append(temp6);
});

//////////Weather AJAX 6
$(document).ready(function() {
	$("#btn6").click(function() {
		return getWeather5();
	});
});

function getWeather6() {
	$.ajax ({
		url: 'https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216',
		type: "GET",
		datatype: "jsonp",
		success: function(data) {
			var temp = showTemp6(data)
			var icon = showIcon6(data)
			var weather_desc = showDesc6(data)

			$(".temp6").html(temp);
			$('.icon6').attr('src', icon);
			$('.weather-desc6').empty().append(weather_desc);
		}
	});
}

function showIcon6(data) {
	var icon6 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	return icon6;
}

function showDesc6(data) {
	var weather_desc6 = data.weather[0].main;
	return weather_desc6;
}

function showTemp6(data) {
	var temp6 = data.main.temp + "&deg;";
	return temp6;
}
/////Automatic Refresh Rate6
setInterval(() => {
	getWeather6(); 
}, 15000);



//////////Weather API 7/////////////////////////////////////////////////////////
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216', 
function(data) {

	var icon7 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var temp7 = data.main.temp + "&deg;";
	var weather_desc7 = data.weather[0].main;
	var city7 = data.name;



	$('.city7').append(city7);
	$('.icon7').attr('src', icon7);
	$('.weather-desc7').append(weather_desc7);
	$('.temp7').append(temp7);
});

//////////Weather AJAX 7
$(document).ready(function() {
	$("#btn7").click(function() {
		return getWeather7();
	});
});

function getWeather7() {
	$.ajax ({
		url: 'https://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216',
		type: "GET",
		datatype: "jsonp",
		success: function(data) {
			var temp = showTemp7(data)
			var icon = showIcon7(data)
			var weather_desc = showDesc7(data)

			$(".temp7").html(temp);
			$('.icon7').attr('src', icon);
			$('.weather-desc7').empty().append(weather_desc);
		}
	});
}

function showIcon7(data) {
	var icon7 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	return icon7;
}

function showDesc7(data) {
	var weather_desc7 = data.weather[0].main;
	return weather_desc7;
}

function showTemp7(data) {
	var temp7 = data.main.temp + "&deg;";
	return temp7;
}
/////Automatic Refresh Rate7
setInterval(() => {
	getWeather7(); 
}, 15000);


//////////Weather API 8/////////////////////////////////////////////////////////
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Columbus&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216', 
function(data) {

	var icon8 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var temp8 = data.main.temp + "&deg;";
	var weather_desc8 = data.weather[0].main;
	var city8 = data.name;



	$('.city8').append(city8);
	$('.icon8').attr('src', icon8);
	$('.weather-desc8').append(weather_desc8);
	$('.temp8').append(temp8);
});

//////////Weather AJAX 8
$(document).ready(function() {
	$("#btn8").click(function() {
		return getWeather8();
	});
});

function getWeather8() {
	$.ajax ({
		url: 'https://api.openweathermap.org/data/2.5/weather?q=Columbus&units=imperial&appid=5ce765ac4b92246a7f3e3c69fb008216',
		type: "GET",
		datatype: "jsonp",
		success: function(data) {
			var temp = showTemp8(data)
			var icon = showIcon8(data)
			var weather_desc = showDesc8(data)

			$(".temp8").html(temp);
			$('.icon8').attr('src', icon);
			$('.weather-desc8').empty().append(weather_desc);
		}
	});
}

function showIcon8(data) {
	var icon8 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	return icon8;
}

function showDesc8(data) {
	var weather_desc8 = data.weather[0].main;
	return weather_desc8;
}

function showTemp8(data) {
	var temp8 = data.main.temp + "&deg;";
	return temp8;
}
/////Automatic Refresh Rate8
setInterval(() => {
	getWeather8(); 
}, 15000);