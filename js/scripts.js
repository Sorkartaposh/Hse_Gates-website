(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});
		
		// date and time picker
		$(function() {
			// initialize input widgets first
			$('#datepairExample .time').timepicker({
				'showDuration': true,
				'timeFormat': 'g:ia'
			});

			$('#datepairExample .date').datepicker({
				'format': 'd-m-yyyy',
				'autoclose': true
			});

			// initialize datepair
			$('#datepairExample').datepair();

		});
		
		// dehboard profile dropdown toggle
		$(document).ready(function() {
			$(".deshboard-profile").click(function(event) {
			  $(".deshboard-profile-dropdown").toggle();
			  event.stopPropagation(); // Prevents the click event from propagating to the document body
			});
			
			$(document).click(function(event) {
			  var dropdown = $(".deshboard-profile-dropdown");
			  if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
				dropdown.hide();
			  }
			});
		  });

		// counter
		$('.timer').appear();
		    $(document.body).on('appear', '.timer', function(e, $affected) {
		        $affected.each(function() {
		            var $this = $(this);
		            if (!$this.hasClass('appeared')) {
		                jQuery({
		                    Counter: 0
		                }).animate({
		                    Counter: $this.attr('data-count')
		                }, {
		                    duration: 1500,
		                    easing: 'swing',
		                    step: function() {
		                        var num = Math.ceil(this.Counter).toString();
		                        $this.html(num);
		                    }
		                });
		                $this.addClass('appeared');
		            }
		        });
		    });		


		// carousel js
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			autoplay:true,
			autoplayTimeout:3000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});

			// password hide/show
		$("#showPass").click(function() {
			if ($("#myPass").attr("type") == "password") {
			$("#myPass").attr("type", "text");
			} else {
			$("#myPass").attr("type", "password");
			}
		});
		$("#showPass").click(function() {
			$("#showPass i").toggle();
		});


		

		
			


		
		
	});
})(jQuery);


	// nice select here
	$(document).ready(function() {
		$('.deshboard-select').niceSelect();
		$('.deshboard-select2').niceSelect();
	});
			
// pie chart
$('#demo-pie-1').pieChart({
    barColor: '#18b5cf',   
    trackColor: '#ecf1f6', 
    lineCap: 'square',     
    size: 130,             
    lineWidth: 19.5,      
    // rotate: 90,   
    onStep: function(from, to, percent) {
        $(this.element).find('.pie-value').text(Math.round(  20 / 2.22222222222) + '/20'); // Convert percent to actual value
    }
});

// pie chart
$('#demo-pie-2').pieChart({
    barColor: '#18b5cf',   
    trackColor: '#ecf1f6', 
    lineCap: 'square',     
    size: 130,             
    lineWidth: 19.5,      
    // rotate: 90,   
    onStep: function(from, to, percent) {
        $(this.element).find('.pie-value').text(Math.round( 4 / 1.33333333333) + '/4'); // Convert percent to actual value
    }
});

// pie chart
$('#demo-pie-3').pieChart({
    barColor: '#18b5cf',   
    trackColor: '#ecf1f6', 
    lineCap: 'square',     
    size: 130,             
    lineWidth: 19.5,      
    // rotate: 90,   
    onStep: function(from, to, percent) {
        $(this.element).find('.pie-value').text(Math.round(  4 / 1.33333333333) + '/4'); // Convert percent to actual value
    }
});


