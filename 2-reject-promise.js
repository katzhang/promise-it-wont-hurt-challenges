var q = require('q');
var deferred = q.defer();
var promise = deferred.promise;

promise.fail(console.log);

setTimeout(function() {
	deferred.reject('REJECTED!');
}, 300);