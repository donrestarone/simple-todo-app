// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener('DOMContentLoaded', function(){
	
	var myForm = document.querySelector('#new_todo');

	myForm.addEventListener('submit', function(e){
		e.preventDefault();
		
		//here the url for the ajax call is being taken from the action portion of the form_for
		//.serialize jquery method sends the authenticity token along with the request so the server knows its coming from the app
		$.ajax({
			url: myForm.getAttribute('action'),
			method: myForm.getAttribute('method'),
			dataType: 'json',
			data: $(myForm).serialize()
		}).done(function(data){
			var myList = document.querySelector('#myList');
			var li = document.createElement('li');
			console.log(data);
			li.append(data.data.content);
			$(myList).append(li);
			//$(myList).append(data);
			// myList.appendChild(data);
			console.log('success');
		})

		console.log
	})
});