var accordian = function(config) {
	var headClass = config.headClass || "accordian-head",
		contentClass = config.contentClass || "accordian-content",
		speed = config.speed || "fast",
		openClass = config.openClass || "current",
		revealType = config.revealType || "click";

	var $accordianHead = $('.'+headClass),
		$accordianContent = $('.'+contentClass);

	function init() {
			     $accordianHead.on(revealType,function() {
			       $(this).next('.'+contentClass).slideToggle(speed).siblings('.'+contentClass+":visible").slideUp(speed);
        		   $(this).toggleClass(openClass);
        		   $(this).siblings('.'+headClass).removeClass(openClass);
	    	});
	};

	function expand(n) {
		collapseAll();
		$accordianContent.eq(n).slideDown(speed);
		$accordianHead.eq(n).addClass(openClass);
	};

	function expandAll() {
		$accordianContent.slideDown(speed);
		$accordianHead.addClass(openClass);

	};

	function collapseAll() {
		$accordianContent.slideUp(speed);
		$accordianHead.removeClass(openClass);	
	};

	return {
            init: init,
            expand: expand,
            expandAll: expandAll,
            collapseAll: collapseAll
        }
};
