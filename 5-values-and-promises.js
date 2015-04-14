var q = require('q');
var deferred = q.defer();
var promise = deferred.promise;

var attachTitle = function(name) {
	return 'DR. ' + name;
};

promise.then(attachTitle).then(console.log);
deferred.resolve('MANHATTAN');