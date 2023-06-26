$(document).ready(function(){
    $('.slider').slick(
		{
			arrows:false,
			dots:true,
			slidesToShow:3,
			slidesToScroll:3,
			speed:1000,
			easing: 'linear',
			responsive:[
				{
					breakpoint: 1324,
					settings: {
						slidesToShow:2,
						slidesToScroll:1,
					}
				},
				{
					breakpoint: 970,
					settings: {
						slidesToShow:1,
						slidesToScroll:1,
					}
				}
			]
		
});
});