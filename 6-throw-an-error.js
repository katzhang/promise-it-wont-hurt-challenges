var q = require('q');
var file = process.argv[2];

function parsePromised(file) {
	var deferred = q.defer();
	try {
		deferred.resolve(JSON.parse(file));
	} catch(e) {
		deferred.reject(e);
	}
	return deferred.promise;
};


parsePromised(file)
.then(null, console.log);

