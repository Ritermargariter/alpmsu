ymaps.ready(function () {

	var myMap = new ymaps.Map("YMapsID", {
		center: [55.700603, 37.519449],
		zoom: 11,
	});

	// создание маркера
	var myPlacemark = new ymaps.Placemark([55.700603, 37.519449], {
		content: 'название маркера',
		balloonContent: 'html-контент',
	});

	// добавление маркера на карту
	myMap.geoObjects.add(myPlacemark);

});


var link = document.querySelector(".login-link");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
	}
});