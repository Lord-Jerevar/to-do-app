
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

	//changing background colors
	var colors = [
		'#282c34',
		'#ff0000',
		'#482f3f',
		'#60ee60',
		'#cccccc'
	]

	var counter = 0
		console.log ( colors )
	$('#bkgrndbtn').click(function (){
		counter = counter + 1
		if (counter > colors.length - 1) {
			counter = 0
		}
		$('body').css('background-color', colors[counter])
	})

})
