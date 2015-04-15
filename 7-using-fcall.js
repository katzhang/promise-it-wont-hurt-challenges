var q = require('q');
var deferred = q.defer();
var promise = deferred.promise;
var file = process.argv[2];

q.fcall(function() {
	JSON.parse(file);
})
.catch(function(error) {
	console.log(error);
});

