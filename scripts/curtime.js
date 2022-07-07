const coolElement = document.getElementById("time");

coolElement.textContent = luxon.DateTime.now().toFormat("HH:mm:ss");
var Time;
	setInterval(function() {
		coolElement.textContent = luxon.DateTime.now().toFormat("HH:mm:ss");
	}, 1000);