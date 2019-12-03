//Hello World
/*$(document).ready(function(){
    alert("Hello World!");		
  });*/

$.when($.ready).then(function() {
// Document is ready.
  });

//Click
$("#target").click(function() {
  alert( "thanks for clicking" );
});

//Hover
$(document).ready(function(){
  $("#target1").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
  });
});

//Keypress
$(document).ready(function(){
	$("#target2").keydown(function(event){
		$("#key").text("The key code of " + String.fromCharCode(event.which) + " is: " + event.which);
		$("#target2").val("");
	}); 
});

//Cursor position
$(document).ready(function(){
  $(document).mousemove(function(event){
    $("span").text(event.pageX + ", " + event.pageY);
  });
});

//Event to many elements
$('#elm1, #elm2').click(function() {
  alert("thanks for clicking");
});

//Hide and show item
$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});

//Hide and show item animatedly with a molten effect
$(document).ready(function(){
  $("#showAnime").click(function(){
    $("#box1").fadeIn(2000);
  });
});

$(document).ready(function(){
  $("#hideAnime").click(function(){
    $("#box2").fadeOut(2000);
  });
});

//Iterate a collection of elements and apply a change of style on them
$( "#btnChange" ).click(function() {
  $( "li" ).each(function() {
    $( this ).toggleClass( "example" );
  });
});

//Obtain the parent element of a certain element
$( '.fruit').each(function() {
  var parentTag = $( this ).parent().get( 0 ).tagName;
  $( this ).prepend( document.createTextNode( parentTag + " > " ) );
});
