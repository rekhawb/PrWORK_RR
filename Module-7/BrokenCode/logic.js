
//when the fact button is clicked
$("#factButton").on("click", function() {

	//generate random number between 0 and 4
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})

//This array holds Boo dog facts
var booFacts = ["Boo is a pomeranian",
 							" Boo's best friend is another pomeranian named Buddy",
						    "Boo the Pomeranian was born on March 16, making him a Pisces",
						    "Boo's favourite food is grass", 
							"Boo has released two books" ]

// When the textPink is pressed

$("#textPink").on("click", function() {
	$("#funText").css("color"," pink")
})

//When the textOrange is clicked

$("#textOrange").on("click", function() {
$("#funText").css("color", "orange")
})

//When the textGreen is clicked
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

//When Grow button is clicked

$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

//When Shrink button is clicked

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})