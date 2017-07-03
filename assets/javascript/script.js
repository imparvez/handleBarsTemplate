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

	var template = Handlebars.compile(document.getElementById('personTemplate').innerHTML);
	content.innerHTML = template(data);
}());