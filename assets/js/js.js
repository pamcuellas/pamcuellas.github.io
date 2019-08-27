
$( ".dropdown-item" ).each(function( ) {
    $( this ).click( function (index) {

      console.log("["+ this.textContent+"]")
      if ($.trim(this.textContent) == 'Mission to Mars') {
        $("#mainpage").addClass('invisible');
        $("#mainpage").removeClass('getposition');
        $("#missiontomars").addClass('getposition');
        $("#missiontomars").removeClass('invisible');
      } else {
        $("#missiontomars").addClass('invisible');
        $("#missiontomars").removeClass('getposition');
        $("#mainpage").addClass('getposition');
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