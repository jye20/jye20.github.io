// First sets up a default location for map/marker initialization, then grabs the inputted location.
// After the map and marker are initialized, a service is created to attempt to use the inputted location
// as a proper location in the map. If the location is found, then the map is moved there with a set marker.
function initMap(){
    // console.log("initing map...");
    var defaultLoc = {lat: 0, lng: 0};
    var actualLoc = document.getElementById("addressInput").value;
    var locReq = {
        query: actualLoc,
        fields: ["name", "geometry"],
    };
    
    // console.log('actualLoc :>> ', actualLoc);
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: defaultLoc,
    });

    var marker = new google.maps.Marker({
        position: defaultLoc,
        map,
    });

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(locReq, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            map.setCenter(results[0].geometry.location);
            marker.setPosition(results[0].geometry.location);
        }
    });
}