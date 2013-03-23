jQuery(document).ready(function() {
  // hack to get tooltip to persist whilst it is hovered over
  jQuery( "a.footnote-identifier-link" ).bind( 
    "mouseleave", 
    function( event ) { 
      event.stopImmediatePropagation(); 
      var fixed = setTimeout('jQuery("a.footnote-identifier-link").tooltip("close")', 500); 
      jQuery(".ui-tooltip").hover( 
        function(){
          clearTimeout (fixed);
        }, 
        function(){
          jQuery("a.footnote-identifier-link").tooltip("close");
        }
      ); 
    }
  ).tooltip();
  
  
  jQuery( "a.footnote-identifier-link" ).tooltip({
    items: "a.footnote-identifier-link",
    tooltipClass: "footnote footnote-tooltip",
    content: function() {
      var element = jQuery( this );
      var bibentry = element.attr("href");      
      return jQuery(bibentry).html();
    }
  });
});