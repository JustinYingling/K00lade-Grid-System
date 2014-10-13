;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		//Dropdown
		var $dropdown_trigger = $('.nav-trigger');
		var $dropdown = $('.nav > .shell > ul');

		if($dropdown_trigger.length) {
			$dropdown_trigger.on('click', function(e){
				var closest_dropdown = $(this).siblings('ul');
				closest_dropdown.stop(true, true).slideToggle('slow');

				e.preventDefault();
			});

			$doc.on('click', function(e){
				if((!$(e.target).parents().hasClass('nav')) && (!$(e.target).hasClass('nav-trigger')) && ($win.width() < 767)) {
					$dropdown.stop(true, true).slideUp('slow');
				};
			});
		};

		//Slider plugin
		$('.slides').carouFredSel({
			auto: {
        		play: false
        	},
        	pagination: {
				container: '.slider .slider-paging',
				anchorBuilder: function(number) {
				return '<li><a href="#' + number + '">'+ number +'</a></li>';
				}
			},
			responsive: true,
			prev: {
				button: ".slider-prev"
			},
			next: {
				button: ".slider-next"
			}
		});

		$('.slide-image img').fullscreener();

		$('.intro img').fullscreener();
	});

	// $win.resize(function() {
	// 	if($win.width() > 768) {
	// 	$('.nav > .shell > ul').css('display', 'block');
	// 	} else {
	// 	$('.nav > .shell > ul ul').css('display', 'none');
	// 	};
	// });
	
	// Facebook custom scroll
	//$('.fb-widget').mCustomScrollbar();
	
})(jQuery, window, document);

 (function($){
        $(window).load(function(){
            $(".list-socials").mCustomScrollbar({
			theme:"inset-3"
		});
        });
})(jQuery);     