---
---

(function(L) {


    var map = L.map('map').setView([48.36936535443323, 14.513704089483294], 15);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 10,
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
    
    L.marker([48.36831567160878, 14.512507038275828]).addTo(map)
        .bindPopup('FH OÖ Campus Hagenberg, F&E<br/>Softwarepark 13<br/>4232 Hagenberg im Mühlkreis'
        + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?from=&to=48.36831%2C14.51250">Route hierhin</a>');
        // .openPopup();

    L.marker([48.28526801887648, 14.339340265817535]).addTo(map)
    .bindPopup('voestalpine Stahl GmbH, F&E<br/>voestalpine-Straße 3<br/>4020 Linz'
    + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?from=&to=48.36831%2C14.51250">Route hierhin</a>');
    // .openPopup();

})(L);
