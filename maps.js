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