'use strict';
module.exports = function (results, config) {
	return JSON.stringify({
		config: config,
		results: results
	});
};
