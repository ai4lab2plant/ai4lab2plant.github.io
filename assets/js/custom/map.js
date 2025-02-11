---
---

(function(L) {


    var map = L.map('map').setView([48.336098, 14.319767], 11);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        scrollWheelZoom: false,
        accessToken: 'pk.eyJ1IjoianplbmlzZWsiLCJhIjoiY2wyeXIxNWVpMDJvMjNjcWJpYWloZ29vdSJ9.aVp5R2VZRdkWBrCdo8J90Q'
    }).addTo(map);
    
    map.scrollWheelZoom.disable();
    
    // var popup = L.popup()
    //     .setLatLng([48.36936535443323, 14.513704089483294])
    //     .setContent("Softwarepark Hagenberg")
    //     .openOn(map);
    
    L.marker([48.368107, 14.511931]).addTo(map)
        .bindPopup('FH OÖ Campus Hagenberg, F&E<br/>Softwarepark 13<br/>4232 Hagenberg im Mühlkreis'
        + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions#map=19/48.368107/14.511931">Route hierhin</a>');
        // .openPopup();        

    L.marker([48.2785095, 14.319616354580202]).addTo(map)
    .bindPopup('voestalpine Stahl GmbH, F&E<br/>voestalpine-Straße 3<br/>4020 Linz'
    + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?route=%3B48.2785095%2C14.319616354580202">Route hierhin</a>');
    // .openPopup();

    L.marker([48.27971585, 14.319450188857044]).addTo(map)
    .bindPopup('K1-MET GmbH<br/>Stahlstraße 14, BG88<br/>4020 Linz'
    + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?route=%3B48.27971585%2C14.319450188857044">Route hierhin</a>');
    // .openPopup();    

})(L);
