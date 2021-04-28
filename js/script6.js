$("#green").mouseover(function() {  // .on("mouseover", function()
    $("#texte").css("color", "green");
});
$("#red").mouseover(function() {
    $("#texte").css("color", "red");
});
$("#blue").mouseover(function() {
    $("#texte").css("color", "blue");
});
/*
$("#green, #red, #blue").mouseenter(function() {
    var changeColor = $(this).attr("id");
    $("#text").css("color", changeColor)
});
*/
$("#green, #red, #blue").mouseout(function() {
    $("#texte").css("color", "black");
});