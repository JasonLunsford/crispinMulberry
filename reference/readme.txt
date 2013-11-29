General (On-going) Notes

	1) jQuery 1.x used (via CDN) to ensure maximum compatibility with older IE (2.x not supported with IE<9)...
	
	2) ...but I still test to ensure jQuery is attached to the window object. If it is not then attach the local version (same version number)
	
	3) Modernizr v2.7.0 (minified) selected as a HTML5 / CSS3 feature detection tool, to help ensure IE7+ compatibility with HTML5 elements
	
	4) Using "mynormalize.css" calibrated specifically for this project, which includes some well documented normalization tricks and lots of my own tweaks.
		A) Choose to use a separate normalizer to boost cross browser compatibility without adding lines to main.css
		
	5) I created an embedded Twitter Timeline, configured for @CrispinMulberry. Everything looks and works great but for the follow button, which only reads "Follow", not "Follow @CrispinMulberry"
	
	6) Known defects still in natCarousel.js (but documented them) because I do not live in a time bubble / have access to the TARDIS, and are therefore chained to a linear time line, like many of you.
	
	7) Created a plug-in to improve code reuse and demonstrate how cool carouseling is as a plug-in solution. Also, plug-ins are fun to write.
	
	8) If the answer is buried in NAT.psd I lack the photoShopFu to find it - therefore I picked a logical roll-over color for anchors and buttons, based on the color palette.
	
	9) Left grammar / spelling / syntax / capitalization errors in place (to make comparing my version to your version easier)
	
	10) Mostly avoided using HTML5 ATTRIBUTES (not elements) because Modernizr only allows IE[old] to render the elements, not support them. Alas.
	
	11) Small trouble formatting the Recent Articles text, the word "without" was extremely uncooperative - would not wrap to the fourth line (of the third section)!
		
	
Amusing Stuff I Found

	* Setting the page banner to 999px, instead of 1000px like the rest of the body? Cute!
	* 666 and 420 appearing everywhere. Enough said.
	* 1px differences between category title font sizes.
	* color differences between the top and bottom colors of the <nav> element.

