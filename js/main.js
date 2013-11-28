(function() {
	"use strict";
	$(function() {
	
		// Enable page functionality when JS detected
		$("#twitterZone").children("img").hide(); // Remove Twitter mock image if JS loads
		$("#carouselRoot div.smallPictureRow").removeClass("jsDisabled");
		
		// Activate custom plug-in
		// Default rotation speed: 4000
		// Usage: natCarousel({ speed:[your_rotation_value_in_milliseconds_integer_only] })
		//$("#carouselRoot").natCarousel();
				
		// Simple mock-server demonstration highlighting how the menu system could work, and the portability of this
		// particular CSS solution.
		$("nav li").on("click",function() {
			$("nav li").removeClass("selected lastChildSelected");
			
			// programmatically add last-class to compensate for IE < 9 hating last children
			( $(this).hasClass("lastChild") ) ? $(this).addClass("selected lastChildSelected") : $(this).addClass("selected");
		});
		
		// Disable nav items
		$("nav li a").on("click", function(e) {
			e.preventDefault();
			console.log($(this).text()+" clicked");
		});
		
		// Disable page footer icons when JS is available - otherwise open page in another tab
		$("div.siteFooter a").on("click", function(e) {
			e.preventDefault();
			if ( $(this).attr(src) ) { console.log("Link to "+$(this).attr(src)+" clicked."); }
			else { console.log($(this).text()+" clicked"); }
		});
		
		
		// Intercept and deactivate form submissions
		$("#searchButton").on("click", function(e) {
			e.preventDefault();
			console.log("Site search triggered.");
		});
		
		$("#newsletterButton").on("click", function(e) {
			e.preventDefault();
			// add click state detection for the two check boxes and output their state
			console.log("Newsletter lead capture form submitted");
		});
	
	});
})();
