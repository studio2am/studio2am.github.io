$(document).ready(function() {
    $('.nav-item').on('click', function(e) {
        var targetSec = e.currentTarget.getAttribute('data-attr');
        $('html, body').animate({
            scrollTop: $('#' + targetSec).offset().top
        }, 1000);
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('.navbar').addClass('scrolled');
            // getData();
            console.log("add class");
        } else {
            $('.navbar').removeClass('scrolled');
            console.log("remove class");
        }
    });
});

// Initialize and add the map
function initMap() {
    // The location of studio
    var location = {
        lat: 37.069384,
        lng: -8.102646
    };
    // The map, centered at studio
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 10,
            center: location
        });
    // The marker, positioned at studio
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}