Project Notes

	1) jQuery 1.x used (via CDN) to ensure maximum compatibility with older IE (2.x not supported with IE<9)...
	2) ...but I still test to ensure jQuery is attached to the window object. If it is not then attach the local version (same version number)
	3) Modernizr v2.7.0 (minified) selected as a HTML5 / CSS3 feature detection tool, to help ensure IE7+ compatibility with HTML5 elements
	4) Using my own version of "normalize.css" calibrated specificly for this project, which includes several of my own tweaks.
		A) Choose to use normalization to better ensure my page will render nicely on your machine(s)
		B) To lessen some of the extensive cross browser testing I'd ordinarily need to do
		C) Getting this project done and looking good > fiddling with well documented browser rendering issues (IMHO of course)
	5) Picked Liberation Sans has a good third option font when Helvetica (Mac) and Arial (Mac, PC) not available. Served via @font-face.
	6) Body width of 1000px, but masthead width of 999px? Nice touch!
	7) I created an embedded Twitter Timeline, configured for @CrispinMulberry. Everything looks and works great but for the follow button, which only reads "Follow", not "Follow @CrispinMulberry"
