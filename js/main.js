$(window).load(function () {
    $("#preloader").fadeOut("slow");
});
$(document).ready(function () {
    wow = new WOW({
        mobile: false, // default
    })
    wow.init();
    $('#top-nav').onePageNav({
        currentClass: 'current'
        , changeHash: true
        , scrollSpeed: 1200
    });
    
    
    /** NAVBAR cancelAnimationFrame // Navbar compression **/
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("animated");
        }
        else {
            $(".navbar-fixed-top").removeClass("animated");
        }
    });
    
    
    
    /** COUNTDOWN JAVASCRIPT SOURCED FROM - https://codepen.io/danieloprado/pen/aObYYj **/
    
    var elem = $('#container');
    var knobResize = function () {
        var width = Math.floor((elem.width() - 150) / 4);
        elem.find('.knob').trigger('configure', {
            width: width
            , height: width
        });
    }
    $(window).resize(function () {
        knobResize();
    });
    var myDate = new Date("July 20, 2017 18:30:00");
    myDate.setDate(myDate.getDate());
    elem.find('#knob-countdown').countdown({
        until: myDate
        , format: 'DHMS'
        , onTick: function (e) {
            var secs = e[6]
                , mins = e[5]
                , hr = e[4]
                , ds = e[3];
            elem.find("#countdown-ds").val(ds).trigger("change");
            elem.find("#countdown-hr").val(hr).trigger("change");
            elem.find("#countdown-min").val(mins).trigger("change");
            elem.find("#countdown-sec").val(secs).trigger("change");
        }
    });
    $('.knob').knob();
    knobResize();


});
