
// Force colapse hide when Portfolio menu link is clicked 
$(".portfolio").click( function (index) {
  $(".navbar-collapse").collapse('hide');
});

// Force colapse hide when a menu link is clicked 
$( ".dropdown-item" ).click( function (index) {
  $(".navbar-collapse").collapse('hide');
});
$( ".nav-item" ).click( function (index) {
  $(".navbar-collapse").collapse('hide');
});

/*  TOOLTIP  */
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
