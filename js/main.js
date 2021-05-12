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


        // afterLoad: function (anchorLink, index) {
		// 	if (index == 1){
		// 		alert ('첫번째 인덱스');
		// 	}
		// },

	});
    
    
});
