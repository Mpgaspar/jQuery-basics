$(document).ready(function(){
    alert("Hello World!");		
  });

  $.when( $.ready ).then(function() {
  // Document is ready.
  });

  $( "#target" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#other" ).click(function() {
    $( "#target" ).click();
  });