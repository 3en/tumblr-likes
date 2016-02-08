

$.noConflict();


jQuery( document ).ready(function( $ ) {

	insertButton();

	function insertButton() {


		var getParameterByName = function(name, url) {
			if (!url) url = window.location.href;
			name = name.replace(/[\[\]]/g, "\\$&");
			var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
				results = regex.exec(url);
			if (!results) return null;
			if (!results[2]) return '';
			return decodeURIComponent(results[2].replace(/\+/g, " "));
		};

		tumblr_username = getParameterByName('tumblelogName', window.location.href)

		if (tumblr_username) {

				var jqxhr = $.get( "/liked/by/" + tumblr_username, function( data ) {

					// // Insert button - Liked page active
					$('.buttons-container').prepend(' <span class="tx-button likes-button tx-button--with-icon " data-js-follow=""><a class="btn icon" target="_top" href="http://tumblr.com/liked/by/'+tumblr_username+'">Likes</span>');
					console.log( "Chrome Extension Tumblr Likes: Likes page is active. Hurray I've added a button" );

				})
				.fail(function() {
				   
					// // Insert button - Faded (non-active)
					$('.buttons-container').prepend(' <span class="tx-button likes-button tx-button--with-icon " data-js-follow="" style="opacity:0.6;"><a class="btn icon" target="_top" href="http://tumblr.com/liked/by/'+tumblr_username+'">Likes</span>');
					console.log( "Chrome Extension Tumblr Likes: Likes page is not active. I'm going to add a faded button" );

				});

		}

	}

});
