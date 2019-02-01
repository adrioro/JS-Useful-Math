var roundThis = 3.58409;
$("#button").click(function () {
    var newNum = Math.round(roundThis);
    $(this).after(" <br><br>" + newNum + "<br> <br>");
})