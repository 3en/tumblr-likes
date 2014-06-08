// $.noConflict();

// jQuery( document ).ready(function( $ ) {

//     begin();

//     function begin() {

//         if ($('#iframe_controls').length > 0)
//         {
            
//             if(window != window.top){
//                 insertButton();
//             }

//         } else if ($('#tumblr_controls').length > 0) {

//             setControlWidth();

//         }

//     }

//     function setControlWidth() {

//         if ($('#tumblr_controls').width() <= 1) {
//             // not rendered yet - retry
//             setTimeout(setControlWidth, 1000);
//         } else {
//             // Extending width
//             var width = $('#tumblr_controls').width();
//             $('#tumblr_controls').css('width', (100 + width).toString() + 'px');
//         }

//     }

//     function insertButton() {

//         if ($('.dashboard-context').length <= 0 && $('#tumblelog_name').length <= 0) {

//             setTimeout(insertButton, 1000); // wait until loaded

//         } else {
//             if ($('#iframe_controls').length > 0) {

//                 var tumblr_username = $('#tumblelog_name').data('tumblelog-name');

//                 var jqxhr = $.get( "/liked/by/" + tumblr_username, function( data ) {

//                     // Insert button - Liked page active
//                     $('#iframe_controls').prepend('<a class="btn icon" target="_top" href="http://tumblr.com/liked/by/'+tumblr_username+'">Likes</a>');
//                     console.log( "Chrome Extension Tumblr Likes: Likes page is active. Hurray I've added a button" );


//                 })
//                 .fail(function() {

//                     // Insert button - Faded (non-active)
//                     $('#iframe_controls').prepend('<a class="btn icon noaccess" target="_top" href="http://tumblr.com/liked/by/'+tumblr_username+'" style="opacity:0.6;">Likes</a>');
//                     console.log( "Chrome Extension Tumblr Likes: Likes page is not returning. My bad, I'm not going to add a button." );

//                 });
//             } else {
//                 setTimeout(insertButton, 1000);
//             }

//         }

//     }

// });