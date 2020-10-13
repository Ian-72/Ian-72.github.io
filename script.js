/*-- Printing and PDF exports --*/
var link = document.createElement( 'link' );
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = window.location.search.match( /print-pdf/gi ) ? 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/css/print/pdf.css' : 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/css/print/paper.css';
      document.getElementsByTagName( 'head' )[0].appendChild( link );


$(document).ready( function() {
        
        $(".social-profile:first").clone().prependTo("#contact") ;
        
      });
      // Full list of configuration options available at:
      // https://github.com/hakimel/reveal.js#configuration
      Reveal.initialize({
        controls: false,
        progress: false,
        history: false,
        center: true,

        transition: 'convex' // none/fade/slide/convex/concave/zoom


      });