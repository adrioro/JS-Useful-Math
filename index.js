//Math.round();

var roundThis = 3.58409;
$("#button").click(function () {
    var newNum = Math.round(roundThis);
    $(this).after(" <br><br>" + newNum + "<br> <br>");
});

//Math.pow();
var powerThis = Math.pow(2, 5);
$("#power").click(function () {
    var newNum = Math.pow(roundThis);
    $(this).after(" <br><br>" + powerThis + "<br> <br>");
});
//PI is an object, not a method

var p = Math.PI; //p for Pi = 3.141592653589793...
$("#pi").click(function () {
    $('#demo').text("PI is: " + p); // Addintg text to existing <p> with id=demo.
});