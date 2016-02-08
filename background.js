// Runs on main window - increases the size of the iframe

$.noConflict();

jQuery( document ).ready(function( $ ) {

    if ($('iframe.iframe-controls--desktop').length > 0) {
        setControlWidth();
    }

    function setControlWidth() {

        if ($('iframe.iframe-controls--desktop').width() <= 1) {
            // not rendered yet - retry
            setTimeout(setControlWidth, 1000);
        } else {
            // Extending width
            var width = $('iframe.iframe-controls--desktop').width();
            $('iframe.iframe-controls--desktop').css('width', (300 + width).toString() + 'px');
        }

    }

});