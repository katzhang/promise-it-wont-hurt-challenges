var HTTP = require('q-io/http');

var promise = HTTP.read('http://localhost:1337');

promise.then(function(data) {
	console.log(JSON.parse(data));
})
.then(null, console.log)
.done();