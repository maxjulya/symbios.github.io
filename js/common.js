$(function() {

	$("#textarea").removeAttr("required");
  $("#email").removeAttr("required");
  $("#phone").removeAttr("required");
  $("#last_name").removeAttr("required");

	// Custom JS
	$(document).ready(function(){
  $('.dropdown a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });  
});





});
