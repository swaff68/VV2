// $(document).on('ready', function() {
  
// });

// alert("Please add information for each victim.");

// var vicName = []
// // var vicPhone = []
// // var vicStreet = []


// vicName.push(prompt("Victim Name (First and Last)"));
// 	// vicPhone.push(prompt("Victim Phone Number"));
// 	// vicStreet.push(prompt("Victim Street Address"));

// var userResponse = confirm("Would you like to add another victim?");

// while(userResponse === true){
// 	vicName.push(prompt("Victim Name (First and Last)"));
// 	// vicPhone.push(prompt("Victim Phone Number"));
// 	// vicStreet.push(prompt("Victim Street Address"));
// 	userResponse = confirm("Would you like to add another victim?");
// }

// var personInNeed = prompt("Who is in immediate need?");

// alert("Sally, Joe, or Sam are on that street and could help " + personInNeed + ".");


// $('header-area. button').toggle('light-box')

$( "#target" ).click(function() {
	$('#light-box1').css('display', 'table');
		$('.victim-info input').val("");

});


$( "#close" ).click(function() {
	$('#light-box1').hide();

});

$( "#save" ).click(function() {
var userResponse = confirm("Would you like to save another student?");
	if(userResponse === false){
		$('#light-box1').hide();
		$('.victim-info input').val("");
		$('#light-box2').css('display', 'table');
		alert("Give us your volunteer info.")
	}

	else{
		$('.victim-info input').val("");
	}
	return false;



});

$( "#close2" ).click(function() {
	$('#light-box2').hide();
	$('.volunteer-info input').val("");

});

$("#save2").click(function(){
var userResponse = confirm("Thanks, now go save those students!");
	if(userResponse === false || true){
		$('#light-box2').hide();
		$('.volunteer-info input').val("");

	}

	else {
		$('.volunteer-info input').val("");
	}
	// return false;

var userRating = prompt('Please rate this app! (1-5)')

	if(userRating <4){
		alert("Come on man, dont be so picky!")
	

	}

	else {
		alert('Thanks dude!')
	}

});



