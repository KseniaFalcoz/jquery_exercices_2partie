$("input").focusin(function(){
    $("input").css('border','1px solid green');
});
$("input").focusout(function(){
    $("input").css('border','1px solid red');
});