
$( ".dropdown-item" ).each(function( ) {
    $( this ).click( function (index) {

      console.log("["+ this.textContent+"]")
      if ($.trim(this.textContent) == 'Mission to Mars') {
        $("#mainpage").addClass('invisible');
        $("#missiontomars").removeClass('invisible');
        console.log("1")
      } else {
        $("#missiontomars").addClass('invisible');
        $("#mainpage").removeClass('invisible');
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