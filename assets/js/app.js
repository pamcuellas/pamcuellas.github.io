
$( ".dropdown-item" ).each(function( ) {
    $( this ).click( function (index) {
      $(".navbar-collapse").collapse('hide');
    });
  });

$( ".nav-item" ).each(function( ) {
    $( this ).click( function (index) {
      console.log($('.nav-item').index(this));
      if ( $('.nav-item').index(this) != 1) {
        $(".navbar-collapse").collapse('hide');
      }
    });
});

/*  TOOL TIP  */
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
