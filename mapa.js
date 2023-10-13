function iniciarMap(){
    var coord ={lat: 48.828123 ,lng:2.265303};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center:coord
    });
        var marker = new google.maps.Marker({
        position : coord,
        map:map
         });
 }