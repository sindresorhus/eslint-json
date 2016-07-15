'use strict';
module.exports = results => {
	return JSON.stringify(results, (key, val) => {
		// filter away the Esprima AST
		if (key !== 'node') {
			return val;
		}
	});
};
