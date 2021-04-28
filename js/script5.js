$("#nom, #prenom").focusin(function(){
    $("#nom, #prenom").css('border','1px solid green');
});
$("#nom, #prenom").focusout(function(){
    $("#nom, #prenom").css('border','1px solid red');
});