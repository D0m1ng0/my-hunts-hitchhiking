function initMap() {
  var location = {lat: 44.4965643, lng: 11.3349619}
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.4965643, lng: 11.3349619 },
    zoom: 8,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  })
}



function init() {

initMap()

}
$(document).ready(init());
