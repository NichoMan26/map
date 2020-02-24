document.addEventListener('load', () =>{
    console.log('lol');
    function initMap(){
        let  map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
        });
        map.addListener('click', function(e) {
            placeMarkerAndPanTo(e.latLng, map);
    })
    function placeMarkerAndPanTo(latLng, map) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
        map.panTo(latLng);
    }
}
})