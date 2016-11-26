
jQuery(document).ready(function($){

	var exampleItemHtml = $('#example-item').html()

	exampleItemHtml = "<div class='to-do-items'>" + exampleItemHtml + '</div>'
	
	console.log(exampleItemHtml)
	
	$('#complete-button').click(function(){
		alert('clicked on Complete!')
	})

	$('#edit-button').click(function(){
		alert('clicked on Edit!')
	})

	$('#trash-button').click(function(){
		alert('clicked on Trash!')
	})

	$('#add-button').click(function(){
		var newItem = $('#input-text-box').val()
		var output = exampleItemHtml.replace('-EXAMPLE_ITEM1-', newItem)
		$('#display').append(output)
	})
	
})