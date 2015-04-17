var q = require('q');
var defer1 = q.defer();
var defer2 = q.defer();
var promise1 = defer1.promise;
var promise2 = defer2.promise;

function all(p1, p2) {
	var deferred = q.defer();
	var promise = deferred.promise;
	var counter = 0;
	var value1, value2;

	var output1 = p1.then(function(val) {
		counter++;
		value1 = val;
	}, function() {
		deferred.reject();
	});
	var output2 = p2.then(function(val) {
		counter++;
		value2 = val;
	}, function() {
		deferred.reject();
	});

	output1.then(function () {
		if (counter === 2) {
			deferred.resolve([value1, value2]);
		}
	});

	output2.then(function() {
		if (counter === 2) {
			deferred.resolve([value1, value2]);
		};
	});

	return promise;

};

var allPromise = all(promise1, promise2);
allPromise.then(console.log);

setTimeout(function() {
	defer1.resolve('PROMISES');
	defer2.resolve('FTW');
}, 200);