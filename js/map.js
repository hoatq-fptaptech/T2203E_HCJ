let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.0290558, lng: 105.7812718 },
        zoom: 18,
    });
}

window.initMap = initMap;