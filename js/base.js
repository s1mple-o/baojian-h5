(function(){

	//新tabs切换
	function tabs(handles,cons){
		$(handles).each(function(num){
	    	$(this).click(function(){    		
	    		$(handles).removeClass("hover");
	    		$(this).addClass("hover");
	    		$(cons).removeClass("show");
	    		$($(cons)[num]).addClass("show");
	    	});
	    });
	}

	window.tabs = tabs;

})();

