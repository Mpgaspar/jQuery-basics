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
    $("#coord").text(event.pageX + ", " + event.pageY);
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

//Obtain the collection of children of a certain element
$(document).ready(function(){
  $("#list02").children().css({"color": "red", "border": "2px solid red"});
});

//Get all the elements of a certain class
$("#btnget").click(function(){
  alert("Value: " + $(".fruits").text());
});

//Get an item by its ID
$("#btngetid").click(function(){
  alert("Value: " + $("#list01").text());
});

//Obtain all the elements of a certain class that are also hidden
$(document).ready(function(){
  $(".paragraph:hidden").show(3500);
});

//Get those options of a selected element that are selected
$( ".btnoption" ).click(function() {
  var text = $( this ).text();
  $( "#inpshow" ).val( text );
});

//Change the href attribute of the first <a> element 
$(document).ready(function(){
  $("#changehref").click(function(){
    $("#w3s").attr("href", "https://www.youtube.com");
  });
});

//Create a new <p> element with text inside the dom of your page
$("#btncreate").click(function(){
  $("#texts").append("<p>I am a new paragraph</p>");
});

//Show an alert with the value of the first <input> of the page
$(document).ready(function(){
  $("#btnreturn").click(function(){
    alert($("input:text").val());
  });
});

//Remove all elements of a specific selector
$(document).ready(function(){
  $("#btnremove").click(function(){
    $("#div1").remove();
  });
});

//Animate an item after 2 seconds from the initial page load
$(document).ready(function() {
  $(".contentPost").delay(2000).animate({
    opacity: '0.5',
    width: '150px'
  });
});



