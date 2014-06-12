'use strict';
module.exports = function (results, config) {
	return JSON.stringify({
		config: config,
		results: results
	}, function (key, val) {
		// filter away the Esprima AST
		if (key !== 'node') {
			return val;
		}
	});
};
