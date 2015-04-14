var q = require('q');
var deferred = q.defer();
var promise = deferred.promise;

promise.then(console.log, console.log);

deferred.resolve('I FIRED');
deferred.reject('I DID NOT FIRE');