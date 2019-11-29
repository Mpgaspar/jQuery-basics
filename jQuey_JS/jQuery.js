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




