// thesis.js

$.fn.menu = function() {
	var $menuwrapper = $(this);
	
	var $total_chapters = $menuwrapper.find('div.chapter');
	var $sections = $menuwrapper.find('span.header_section_number');
	
	var i;
	
	var $menu_items = function() {
		for(i=1; var <= $total_chapters.length; i++) {
			// I think I'm going astray here... i miss ruby iterators..
		}
	});
	
	$menu.click(function() {
		$total_chapters.removeClass('selected');
		$(this).addClass('selected')
		
		$('div.chapter').hide()
			.filter(this.hash).show();
			
		$('div.navmenu').val(function(){
			"<ul>" +
			for(i in $menu_items) {
				"<li>" + i + "</li>" // this is a prototype, needs to generate links
			} + "</ul>";
		});
	});
	return false;
	
}

$(document).ready(function() {
	
	
	$('div.body_text')
});