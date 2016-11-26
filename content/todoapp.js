
jQuery(document).ready(function($){

	var exampleItemHtml = $('#example-item').html()

	exampleItemHtml = "<div class='to-do-items'>" + exampleItemHtml + '</div>'



	$('#complete-button').click(function(){
		//crosses out selected items
		$('.to-do-item-box:checked').siblings('.to-do-item-text').css('text-decoration','line-through')

	})

	$('#trash-button').click(function(){
		//removes out selected items
		$('.to-do-item-box:checked').parent().remove()
		
		//
	})

	$('#add-button').click(function(){
		var newItem = $('#input-text-box').val()
		var output = exampleItemHtml.replace('-EXAMPLE_ITEM1-', newItem)
		$('#display').append(output)
	})

})
