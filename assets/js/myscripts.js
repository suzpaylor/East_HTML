/*--BROWSER FRIENDLY SMOOTH SCROLLING W3 SCHOOLS--*/

	$(document).ready(function () {
		// Add smooth scrolling to all links
		$("a").on('click', function (event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;

				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function () {

					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		});
	});

/*--SLIDE SHOW JS - W3 SCHOOLS--*/

		var slideIndex = 1;
		showSlides(slideIndex);

		// Next/previous controls
		function plusSlides(n) {
		showSlides(slideIndex += n);
		}

		// Thumbnail image controls
		function currentSlide(n) {
		showSlides(slideIndex = n);
		}

		function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		if (n > slides.length) {slideIndex = 1} 
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block"; 
		dots[slideIndex-1].className += " active";
        }

// collapsible div W3 Schools
 
var coll = document.getElementsByClassName("my-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//these lines of jQuery add a line encouraging volunteering on mouseover
$('#please_show').mouseover(function(){
	$('#please_volunteer').fadeIn()
	.delay(2000)
	.fadeOut();
});

//these lines of jQuery add a line encouraging volunteering on mouseover
$('#please_show2').mouseover(function(){
	$('#please_donate').fadeIn()
	.delay(2000)
	.fadeOut();
});

var test1 = '1234';
//working on weather API
//var APIKey = config.KEY;
//but this isn't working
let MY_KEY = '3652279a5eab355d1ee816c495eefba2';
var APIKey = MY_KEY;
    // Here we are building the URL we need to query the database
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?APPID=${APIKey}&zip=84102,us&units=imperial`;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $("#currentWeather").html('Current Weather: '+ Math.round(response.main.temp) + '&deg' + 'F');
		var src1 = 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png';
		$('#little-icon').attr('src', src1);
      });
