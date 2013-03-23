;(function($, undefined){
	$(function() {
		
		// hack to get tooltip to persist whilst it is hovered over
		$( "a.footnote-identifier-link" ).bind(
			"mouseleave", 
			function( event ) { 
				event.stopImmediatePropagation(); 
				var fixed = setTimeout('$("a.footnote-identifier-link").tooltip("close")', 500); 
				$(".ui-tooltip").hover( 
					function(){
						clearTimeout (fixed);
					}, 
					function(){
						$("a.footnote-identifier-link").tooltip("close");
					}
				); 
			}
		).tooltip();


		$( "a.footnote-identifier-link" ).tooltip({
			items: "a.footnote-identifier-link",
			tooltipClass: "footnote footnote-tooltip",
			content: function() {
				var element = $( this );
				var bibentry = element.attr("href");
				return $(bibentry).html();
			}
		});
	}); 
}(jQuery));
