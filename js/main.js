$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		autoScrolling:true,
		scrollHorizontally: true,
        sectionsColor : ['lightgreen', 'skyblue', 'orange', 'tomato'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage'],
	    menu: '#menu',

        //Navigation
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstPage', 'secondPage', '3rdPage', '4rdPage'],
        showActiveTooltip: true,

        
        //navigation fade
        onLeave: function (origin, destination, direction) {
			if (destination.index < 1 || destination.index > 2){
				$('#fp-nav').addClass('off');
			} 
		},

        afterLoad: function (origin, destination, direction) {
			if (destination.index >= 1 && destination.index <= 2){
				$('#fp-nav').removeClass('off');
			}
		},

	});
    
    
});
