$(function() {
	var isJelliesShowing 	= false;
	var isPondShowing		= true;
	
	$("#jellies-btn").click( toggleJellies );
	$("#pond-btn").click( togglePond );
	$("#pond-btn").css( "opacity", 0.5 );
	
	toggleJellies();
	togglePond();
	
	function toggleJellies() {
		if ( isJelliesShowing === false ) {
			$("#jellies-canvas").show();
			$("#jellies-btn").css( "opacity", 0.5 );
		}
		else {
			$("#jellies-canvas").hide();
			$("#jellies-btn").css( "opacity", 1 );
		}
		
		if ( isPondShowing ) {
			togglePond();
		}
		
		isJelliesShowing = !isJelliesShowing;
	}
	
	function togglePond() {
		if ( isPondShowing === false ) {
			$("#pond-canvas").show();
			$("#pond-btn").css( "opacity", 0.5 );
		}
		else {
			$("#pond-canvas").hide();
			$("#pond-btn").css( "opacity", 1 );
		}
		
		if ( isJelliesShowing ) {
			toggleJellies();
		}
		
		isPondShowing = !isPondShowing;
	}
});
/*
     FILE ARCHIVED ON 20:47:04 Apr 20, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:34:52 Feb 28, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.01
  exclusion.robots: 0.193
  captures_list: 53.202
  CDXLines.iter: 13.698 (3)
  PetaboxLoader3.datanode: 55.18 (4)
  exclusion.robots.policy: 0.178
  RedisCDXSource: 0.999
  PetaboxLoader3.resolve: 464.342
  LoadShardBlock: 35.844 (3)
  load_resource: 516.78
*/