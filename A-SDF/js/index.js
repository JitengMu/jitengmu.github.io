window.HELP_IMPROVE_VIDEOJS = false;

var BASE = "img";
var NUM_1_DOF_FRAMES = 91;
var NUM_2_DOF_FRAMES = 121;
var NUM_2_DOF_FRAMES_JOINT = 11;
var NUM_laptop_FRAMES = 29;

var images_laptop_12 = [];
var images_laptop_13 = [];
var images_door_10 = [];
var images_door_27 = [];
var images_oven_2 = [];
var images_oven_10 = [];
var images_eyeglasses_36 = [];
var images_eyeglasses_37 = [];
var images_fridge_61 = [];
var images_fridge_65 = [];

function preloadImages() {
    for (var i = 0; i < NUM_laptop_FRAMES; i++) {
        var path = BASE + '/laptop12/frame_' + String(i).padStart(2, '0') + '_delay-0.1s.jpg';
        images_laptop_12[i] = new Image();
        images_laptop_12[i].src = path;
    }
    for (var i = 0; i < NUM_laptop_FRAMES; i++) {
        var path = BASE + '/laptop13/frame_' + String(i).padStart(2, '0') + '_delay-0.1s.jpg';
        images_laptop_13[i] = new Image();
        images_laptop_13[i].src = path;
    }

    for (var i = 0; i < NUM_1_DOF_FRAMES; i++) {
        var path = BASE + '/door10/frame_' + String(i).padStart(2, '0') + '_delay-0.08s.jpg';
        images_door_10[i] = new Image();
        images_door_10[i].src = path;
    }
    for (var i = 0; i < NUM_1_DOF_FRAMES; i++) {
        var path = BASE + '/door27/frame_' + String(i).padStart(2, '0') + '_delay-0.08s.jpg';
        images_door_27[i] = new Image();
        images_door_27[i].src = path;
    }
    for (var i = 0; i < NUM_1_DOF_FRAMES; i++) {
        var path = BASE + '/oven2/frame_' + String(i).padStart(2, '0') + '_delay-0.08s.jpg';
        images_oven_2[i] = new Image();
        images_oven_2[i].src = path;
    }
    for (var i = 0; i < NUM_1_DOF_FRAMES; i++) {
        var path = BASE + '/oven10/frame_' + String(i).padStart(2, '0') + '_delay-0.08s.jpg';
        images_oven_10[i] = new Image();
        images_oven_10[i].src = path;
    }
    for (var i = 0; i < NUM_2_DOF_FRAMES; i++) {
        var path = BASE + '/eyeglasses36/frame_' + String(i).padStart(3, '0') + '_delay-0.1s.jpg';
        images_eyeglasses_36[i] = new Image();
        images_eyeglasses_36[i].src = path;
    }
    for (var i = 0; i < NUM_2_DOF_FRAMES; i++) {
        var path = BASE + '/eyeglasses37/frame_' + String(i).padStart(3, '0') + '_delay-0.1s.jpg';
        images_eyeglasses_37[i] = new Image();
        images_eyeglasses_37[i].src = path;
    }
    for (var i = 0; i < NUM_2_DOF_FRAMES; i++) {
        var path = BASE + '/fridge61/frame_' + String(i).padStart(3, '0') + '_delay-0.1s.jpg';
        images_fridge_61[i] = new Image();
        images_fridge_61[i].src = path;
    }
    for (var i = 0; i < NUM_2_DOF_FRAMES; i++) {
        var path = BASE + '/fridge65/frame_' + String(i).padStart(3, '0') + '_delay-0.1s.jpg';
        images_fridge_65[i] = new Image();
        images_fridge_65[i].src = path;
    }

}

// POSE - swatguy

function setlaptop12(i) {
    var image = images_laptop_12[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_laptop12').empty().append(image);
}
function setlaptop13(i) {
    var image = images_laptop_13[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_laptop13').empty().append(image);
}

function setdoor10(i) {
    var image = images_door_10[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_door10').empty().append(image);
}
function setdoor27(i) {
    var image = images_door_27[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_door27').empty().append(image);
}
function setoven2(i) {
    var image = images_oven_2[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_oven2').empty().append(image);
}
function setoven10(i) {
    var image = images_oven_10[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_oven10').empty().append(image);
}
function seteyeglasses36(i) {
    var image = images_eyeglasses_36[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_eyeglasses36').empty().append(image);
}
function seteyeglasses37(i) {
    var image = images_eyeglasses_37[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_eyeglasses37').empty().append(image);
}
function setfridge61(i) {
    var image = images_fridge_61[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_fridge61').empty().append(image);
}
function setfridge65(i) {
    var image = images_fridge_65[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#wrapper_fridge65').empty().append(image);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
        slidesToScroll: 1,
        slidesToShow: 2,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
    }

/*    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for (var i = 0; i < carousels.length; i++) {
        // Add listener to  event
        carousels[i].on('before:show', state => {
            console.log(state);
        });
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
        // bulmaCarousel instance is available as element.bulmaCarousel
        element.bulmaCarousel.on('before-show', function(state) {
            console.log(state);
        });
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadImages();


    // POSE - swatguy

    $('#laptop12').on('input', function(event) {
        setlaptop12(this.value);
    });
    setlaptop12(0);
    $('#laptop12').prop('max', NUM_laptop_FRAMES - 1);

    $('#laptop13').on('input', function(event) {
        setlaptop13(this.value);
    });
    setlaptop13(0);
    $('#laptop13').prop('max', NUM_laptop_FRAMES - 1);

    $('#door10').on('input', function(event) {
        setdoor10(this.value);
    });
    setdoor10(0);
    $('#door10').prop('max', NUM_1_DOF_FRAMES - 1);

    $('#door27').on('input', function(event) {
        setdoor27(this.value);
    });
    setdoor27(0);
    $('#door27').prop('max', NUM_1_DOF_FRAMES - 1);

    $('#oven2').on('input', function(event) {
        setoven2(this.value);
    });
    setoven2(0);
    $('#oven2').prop('max', NUM_1_DOF_FRAMES - 1);

    $('#oven10').on('input', function(event) {
        setoven10(this.value);
    });
    setoven10(0);
    $('#oven10').prop('max', NUM_1_DOF_FRAMES - 1);

    $('#eyeglasses36-1').on('input', function(event) {
        var idx = (+$('#eyeglasses36-1').val())*11 + (+$('#eyeglasses36-2').val());
        seteyeglasses36(idx);
    });
    $('#eyeglasses36-1').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);

    $('#eyeglasses36-2').on('input', function(event) {
        var idx = (+$('#eyeglasses36-1').val())*11 + (+$('#eyeglasses36-2').val());
        seteyeglasses36(idx);
    });
    $('#eyeglasses36-2').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);
    seteyeglasses36(0);

    $('#eyeglasses37-1').on('input', function(event) {
        var idx = (+$('#eyeglasses37-1').val())*11 + (+$('#eyeglasses37-2').val());
        seteyeglasses37(idx);
    });
    $('#eyeglasses37-1').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);

    $('#eyeglasses37-2').on('input', function(event) {
        var idx = (+$('#eyeglasses37-1').val())*11 + (+$('#eyeglasses37-2').val());
        seteyeglasses37(idx);
    });
    $('#eyeglasses37-2').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);
    seteyeglasses37(0);

    $('#fridge61-1').on('input', function(event) {
        var idx = (+$('#fridge61-1').val())*11 + (+$('#fridge61-2').val());
        setfridge61(idx);
    });
    $('#fridge61-1').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);

    $('#fridge61-2').on('input', function(event) {
        var idx = (+$('#fridge61-1').val())*11 + (+$('#fridge61-2').val());
        setfridge61(idx);
    });
    $('#fridge61-2').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);
    setfridge61(0);

    $('#fridge65-1').on('input', function(event) {
        var idx = (+$('#fridge65-1').val())*11 + (+$('#fridge65-2').val());
        setfridge65(idx);
    });
    $('#fridge65-1').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);

    $('#fridge65-2').on('input', function(event) {
        var idx = (+$('#fridge65-1').val())*11 + (+$('#fridge65-2').val());
        setfridge65(idx);
    });
    $('#fridge65-2').prop('max', NUM_2_DOF_FRAMES_JOINT - 1);
    setfridge65(0);

/*    $('#fridge61').on('input', function(event) {
        setfridge61(this.value);
    });
    setfridge61(0);
    $('#fridge61').prop('max', NUM_2_DOF_FRAMES - 1);

    $('#fridge65-1').on('input', function(event) {
        var idx = +$('#fridge65-1').val() + +$('#fridge65-2').val();
        setfridge65(idx);
    });
    setfridge65(0,0);
    $('#fridge65-1').prop('max', NUM_2_DOF_FRAMES - 1);

    $('#fridge65-2').on('input', function(event) {
        var idx = +$('#fridge65-1').val() + +$('#fridge65-2').val();
        setfridge65(idx);
    });
    setfridge65(0,0);
    $('#fridge65-2').prop('max', NUM_2_DOF_FRAMES - 1);
*/

    bulmaSlider.attach();

})
