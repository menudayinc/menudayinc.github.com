(function($){

	$(window).load(function() {
		// Fade in site content
		setTimeout(function(){
			$('.site-title').css({ opacity: 0 });
			if ( $('#social-toggle').is(':hidden') )
				$('.site-footer').addClass('fade-in');
			$('.fade-in').css({ position: 'relative', opacity: 0, top: 28 });
			$('#preload').fadeOut(400);
			setTimeout(function(){
				$('.site-title').animate({ opacity: 1 }, 800, function(){
					$('.fade-in').each(function(index) {
						$(this).delay(400*index).animate({ top : 0, opacity: 1 }, 800);
					});
				});
			}, 800);
		}, 400);
	});

	$(document).ready( function() {
		var interval = 0;
		centerVertically();
		$(window).bind('resize orientationchange', function(){
			centerVertically();
		});

		// Show social profiles links on icon click
		var socToggle = $('#social-toggle'),
			socLinks = $('#social-links'),
			socLink = socLinks.find('li'),
			socLinkCount = socLink.length;

		socLink.each( function(i){
			$(this).hide().css({ top: i * (42 + 8), left: 0, marginLeft: i % 2 === 0 ? -24 : 24 });
		});

		$('.android').click(function() {
		  window.open('https://play.google.com');
		});



		socLink.each(function(i){
			$(this).show().animate({ opacity: 1, marginLeft: 0 }, 300);
		});
		socToggle.removeClass('ion-ios7-plus-empty').addClass('ion-ios7-minus-empty');

		// Validate newsletter form
		$('<div class="loading"></div>').hide().appendTo('.form-wrap');
		$('<div class="success"></div>').hide().appendTo('.form-wrap');

	});

	function centerVertically() {
		var wrap = $('.wrap'),
			diff = $(window).height() - $('.wrap').prop('scrollHeight');
		if ( diff > 84 ) {
			var margin = Math.floor(diff/2);
			wrap.css({ marginTop: margin, marginBottom: margin });
		} else {
			wrap.removeAttr('style');
		}
	}

})(jQuery);
