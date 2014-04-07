var EWS = {};

EWS.setupLinks = function() {

	var dialog_options = {
				bgiframe: true,
				modal: true,
				overlay: {
					backgroundColor: '#000',
					opacity: 0.9
				},
				width: 800,
				autoOpen: false
		};
	
	$('#contact_menu,#cardfile').bind('click', function() {
		$('#contact').dialog(dialog_options);
		$('#contact').dialog('open');
	});
	
	$('#services_menu').bind('click', function() {
		$('#services').dialog(dialog_options);
		$('#services').dialog('open');
	});
	
	$('.menu_item').hover(function() { $(this).addClass('menu_hover'); }, function() {$(this).removeClass('menu_hover');});

};
