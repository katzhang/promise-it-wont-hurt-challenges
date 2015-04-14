var q = require('q');
var deferred = q.defer();
var promise = deferred.promise;

promise.then(console.log);

deferred.resolve('SECOND');
console.log('FIRST');