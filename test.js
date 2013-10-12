'use strict';
var assert = require('assert');
var eslint = require('eslint').cli;


describe('eslint-json', function () {
	it('should be used by ESLint', function () {
		var ret = false;
		var _log = console.log;

		console.log = function (str) {
			if (/{"config"/.test(str)) {
				ret = true;
			}
		}

		eslint.execute(['--format', './json.js', 'test.js']);

		console.log = _log;

		assert(ret);
	});
});
