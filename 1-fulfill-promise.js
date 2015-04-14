var q = require('q');
var deferred = q.defer();
var promise = deferred.promise;

promise.then(console.log);

setTimeout(function() {
	deferred.resolve('RESOLVED!');
}, 300);