'use strict';
var assert = require('assert');
var eslint = require('eslint').cli;

it('should be used by ESLint', function () {
	var ret = false;
	var _log = console.log;

	console.log = function (str) {
		if (/{"results"/.test(str)) {
			ret = true;
		}
	};

	eslint.execute({
		_: ['test.js'],
		format: 'json.js'
	});

	console.log = _log;
	assert(ret);
});
