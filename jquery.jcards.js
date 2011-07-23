/**
 * jCards - jQuery plugin v0.1
 * 
 * Copyright 2011, Mickael GOETZ
 * Released under the MIT, BSD, and GPL Licenses.
 *
 */

(function($)
{
    $.fn.jCards = function(options)
    {
        // default paramaters
        var defaults =
        {
            cards: "jcard", // the class of the jcard elements
            previous: "previous_jcard", // id of the 'previous jcard' toggler
            next: "next_jcard", // id of the 'next jcard' toggler
            
            shift: 0, // if different from zero, vertical AND horizontal shift between two consecutive cards
            v_shift: 20, // vertical shift between two consecutive cards
            h_shift: 20, // horizontal shift between two consecutive cards
            
            start_zIndex: 1000 // minimum value for the z-index CSS property of the cards  
        };

        options = $.extend(defaults, options);
        
        //WHERE THE MAGIC TAKES PLACE
        return this.each(
            function()
            {
                console.log("jCards started");
                
                var $container = $(this);
                var $cards = $container.find("." + options.cards);
                var n = $cards.length;
                var $working_card = null;
                var $previous_card = null;
                var top_shift = 0;
                
                console.log(n + " cards found");
                
                if(options.shift != 0)
                {
                    options.h_shift = options.shift;
                    options.v_shift = options.shift;
                }
                
                console.log("h_shift: " + options.h_shift + " v_shift: " + options.v_shift + "\n ");
                
                for(var i=0; i<n; i++)
                {
                    $working_card = $($cards[i]);
                    $previous_card = $($cards[i-1]);
                    
                    // position shifting
                    /*
                    top_shift = 0;
                    for(var j=i; j>0; j--)
                    {
                        top_shift += $($cards[j]).height();
                    }

                    $($cards[i]).css({position: "relative", top: -top_shift + i*options.v_shift, left: i*options.h_shift, zIndex: options.start_zIndex + i});
                    /*/
                    // margin shifting
                    $working_card.css({position: "relative", marginTop: ($previous_card.height()) ? - $previous_card.height() + options.v_shift : 0, marginLeft: i*options.h_shift, zIndex: options.start_zIndex + i});
                    // $working_card.children().css("z-index", +(options.start_zIndex + i));
                    //*/
                    $working_card.find(":first-child").css("margin-top", 0);
                }
               
                
            } // end function
        ); // end return
    };
})(jQuery); // pass the jQuery object to the function to avoid conflict with the $ sign.