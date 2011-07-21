/**
 * jCards - jQuery plugin v0.1
 * 
 * Copyright 2011, Mickael GOETZ
 * Released under the MIT, BSD, and GPL Licenses.
 *
 */

(function($)
{
    $.fn.jQuizz = function(options)
    {
        // default paramaters
        var defaults =
        {
            
        };

        options = $.extend(defaults, options);
        
        //WHERE THE MAGIC TAKES PLACE
        return this.each(
            function()
            {
            } // end function
        ); // end return
    };
})(jQuery); // pass the jQuery object to the function to avoid conflict with the $ sign.