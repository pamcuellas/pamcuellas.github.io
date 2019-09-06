
$( ".dropdown-item" ).each(function( ) {
    $( this ).click( function (index) {

      if ($.trim(this.textContent) == 'Mission to Mars') {
        $("#mainpage").addClass('hide-this-thing');
        $("#missiontomars").removeClass('hide-this-thing');
      } else {
        $("#missiontomars").addClass('hide-this-thing');
        $("#mainpage").removeClass('hide-this-thing');
        console.log("2")
      }
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


$(".portfolio").click( function (index) {
  $("#missiontomars").addClass('hide-this-thing');
  $("#mainpage").removeClass('hide-this-thing');
});


/*  TOOL TIP  */
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
