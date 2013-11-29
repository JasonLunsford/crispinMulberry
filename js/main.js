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
		
		// Disable nav items (for demonstration purposes only)
		// If JS were disabled these intercepts would not work and the page would reload as expected.
		$("nav li a").on("click", function(e) {
			e.preventDefault();
			console.log($(this).text()+" clicked");
		});
		
		// Disable body and footer anchors (for demonstration purposes only)
		// If JS were disabled these intercepts would not work and the page would reload or create new tabs as expected.
		$("div.copyHeavyContainer a, div.siteFooter a").on("click", function(e) {
			e.preventDefault();
			var anchorCheck = $(this).attr("href");
			if ( typeof anchorCheck != "undefined" && anchorCheck.length > 0 ) { console.log("Link to "+anchorCheck+" clicked."); }
			else { console.log($(this).text()+" clicked"); }
		});
		
		
		// Intercept form submissions
		$("#searchButton").on("click", function(e) {
			e.preventDefault();
			console.log("Site search triggered.");
		});
		
		$("#newsletterButton").on("click", function(e) {
			e.preventDefault();
			var checkBoxOneState = ($("#checkBoxOne:checked").length > 0) ? "Checked" : "Unchecked";
			var checkBoxTwoState = ($("#checkBoxTwo:checked").length > 0) ? "Checked" : "Unchecked";
			console.log("Newsletter lead capture form submitted, with the first check box "+checkBoxOneState+" and the second "+checkBoxTwoState+".");
		});
	
	});
})();
