jQuery( function( $ ) {
  // Tabs
  $( '.myarcade-tabs .game-tab' ).hide();
  $( '.myarcade-tabs ul.tabs li a' ).click( function() {

    var $tab = $( this ),
      $tabs_wrapper = $tab.closest( '.myarcade-tabs' );

    $( 'ul.tabs li', $tabs_wrapper ).removeClass( 'active' );
    $( 'div.game-tab', $tabs_wrapper ).hide();
    $( 'div' + $tab.attr( 'href' ), $tabs_wrapper).show();
    $tab.parent().addClass( 'active' );

    return false;
  });

  $( '.myarcade-tabs' ).each( function() {
    var hash  = window.location.hash,
      url   = window.location.href,
      tabs  = $( this );

    $( 'ul.tabs li:first a', tabs ).click();
  });

  var interval_id;

  function move_progress() {
    var elem = document.getElementById("mapti-progress");
    var width = 0;
    interval_id = setInterval( frame, mapti_single_i18n.progress_speed );

    function frame() {
      if (width >= 100) {
        show_game();
      }
      else {
        width++;
        elem.style.width = width + '%';
        elem.innerHTML = width * 1  + '%';

        if ( width >= mapti_single_i18n.show_loaded_text && mapti_single_i18n.game_loaded_text ) {
          $('#mapti-progressbar-below-text .game-loading').remove();
          $('#mapti-progressbar-below-text .game-loaded').show();
        }
      }
    }
  }

  $('#mapti-progressbar-below-text .game-loaded').on( 'click', function(e) {
      e.preventDefault();
      show_game();
  } );

  function show_game() {
    clearInterval(interval_id);
    $("#progressbar_wrap").remove();
    $("#game-container").show();
  }

  if( mapti_single_i18n.progress_enabled === 'yes' ) {
    move_progress();
  }
});
