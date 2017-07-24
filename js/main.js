$(window).load(function () {
    $("#preloader").fadeOut("slow");
});
$(document).ready(function () {
    wow = new WOW({
        mobile: true, // default
    })
    wow.init();
    $("#top-nav").onePageNav({
        currentClass: "current",
        changeHash: true,
        scrollSpeed: 1200
    });


    /** NAVBAR cancelAnimationFrame // Navbar compression **/
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("animated");
        } else {
            $(".navbar-fixed-top").removeClass("animated");
        }
    });



    /** COUNTDOWN JAVASCRIPT SOURCED FROM - https://codepen.io/danieloprado/pen/aObYYj **/

    var elem = $('#container');
    var knobResize = function () {
        var width = Math.floor((elem.width() - 150) / 4);
        elem.find('.knob').trigger('configure', {
            width: width,
            height: width
        });
    }
    $(window).resize(function () {
        knobResize();
    });
    var myDate = new Date("July 20, 2017 18:30:00");
    myDate.setDate(myDate.getDate());
    elem.find('#knob-countdown').countdown({
        until: myDate,
        format: 'DHMS',
        onTick: function (e) {
            var secs = e[6],
                mins = e[5],
                hr = e[4],
                ds = e[3];
            elem.find("#countdown-ds").val(ds).trigger("change");
            elem.find("#countdown-hr").val(hr).trigger("change");
            elem.find("#countdown-min").val(mins).trigger("change");
            elem.find("#countdown-sec").val(secs).trigger("change");
        }
    });
    $('.knob').knob();
    knobResize();


    /** MAPBOX API **/
    mapboxgl.accessToken = "pk.eyJ1IjoibXZhZGVuIiwiYSI6ImNqNGx2emYwODE5NW4yd3AyYW9laHZpN3UifQ.aMYcdAuZs_fI_bTfZI7Olw";
    var map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mslee/cj0obwm1700872smpb8y9qqdh", // hosted style ID
        center: [-77.031517, 38.898601], // default position for Ironyard DC
        zoom: 14, // starting zoom
        scroll: scrollZoom = false
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // disable map zoom when using scroll
    map.scrollZoom.disable();

    var layerList = document.getElementById("menu");
    var inputs = layerList.getElementsByTagName("input");

    // function switchLayer(layer) {
    //     var layerId = layer.target.id;
    //     map.setStyle("mapbox://styles/mslee/cj0obwm1700872smpb8y9qqdh" /*+ layerId + "-v9"*/);
    // }
    //
    // for (var i = 0; i < inputs.length; i++) {
    //     inputs[i].onclick = switchLayer;
    // }

    map.on("load", function () {

        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-77.031517, 38.898601]
                        },
                        "properties": {
                            "title": "The Iron Yard",
                            "icon": "marker"
                        }
                                        }]
                }
            },
            "layout": {
                "icon-image": "{icon}-15",
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
            }
        });
    });


});
