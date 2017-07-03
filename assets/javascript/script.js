(function () {
	var content = document.getElementById('content');
	var html = '';
	var data = {
		title: 'Really Cool People',
		people: [
			{
				name: 'John',
				age: 34,
				email: 'abc@gmail.com'
			}, {
				name: 'Sally',
				age: 22,
				email: 'Sally@gmail.com'
			}, {
				name: 'George',
				age: 45,
				email: 'George@gmail.com'
			}
		]
	};

	html += '<h1>'+data.title+'</h1>';
	html += '<ul class="people">';

	for(var i = 0; i < data.people.length; i++) {
		var person = data.people[i];

		html += '<li class="person">\
					<h3>' + person.name + '</h3>\
					<div>Age: '+ person.age +'</div>\
					<a href="mailto:'+ person.email+'">Contact ' + person.name + '</a>\
				</li>';
	}

	html += '</ul>';

	content.innerHTML = html;
}());