$(function() {                       //run when the DOM is ready
  $("#mobileMenuIcon").click(function() {  //use a class, since your ID gets mangled
    $("#headerNav").toggleClass("active");
    $("#mobileMenuIcon").toggleClass("activeOpacity");       
  });
});

$(document).ready(function(){
    $('.hidden').slideDown(1000);
});