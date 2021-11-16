const app = {
    initialize: function() {

        $('#button1').click(function() {
            $("#message").text(randomMessage());
            console.log("hi!")

        });

        function randomMessage() {
            var x = Math.floor(Math.random() * 3);
            console.log(x);
            var message;

            if (x == 0) {
                message = "I like your shirt :)";
            } else if (x == 1) {
                message = "How you doin? - Joey voice";
            } else {
                message = "Keep up the good work!";
            }
            return message;
        }

    }
}

$(document).ready(function() {
    $('p:first').mouseover(function() {
        $(this).addClass('hover');
    });
    $('p:first').mouseout(function() {
        $(this).removeClass('hover');
    });
});

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}