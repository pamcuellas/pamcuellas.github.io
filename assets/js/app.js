
// Force colapse hide when Portfolio menu link is clicked 
$(".portfolio").click( function (index) {
  $(".navbar-collapse").collapse('hide');
});

// Force colapse hide when a menu link is clicked 
$( ".nav-item" ).each(function( i, obj) {
  $( this ).click( function (index) {
     if ( $('.nav-item').index(this) != 1) {
        $(".navbar-collapse").collapse('hide');
    }
  });
});
$( ".dropdown-item" ).each(function( ) {
  $( this ).click( function (index) {
    $(".navbar-collapse").collapse('hide');
  });
});

/*  TOOLTIP  */
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
