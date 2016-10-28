$(document).ready(function() {



function randomColor() {
    var color = '#';
    for (var i = 0; i < 3; i++)
    {
        color += ('0' + (Math.random() * 256 | 0) .toString(16)) .substr( - 2);
    }
    return color;
}


});

$('body').css('background-color', color);
