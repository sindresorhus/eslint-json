# eslint-json [![Build Status](https://secure.travis-ci.org/sindresorhus/eslint-json.png?branch=master)](http://travis-ci.org/sindresorhus/eslint-json)

> JSON formatter (reporter) for [ESLint](https://github.com/nzakas/eslint/)

Makes it easy to use ESLint with other tools.


## Install

Install with [npm](https://npmjs.org/package/eslint-json): `npm install --save-dev eslint-json`


## Getting started

Use it with:

#### ESLint CLI

```
eslint --format node_modules/eslint-json/json.js file.js
```

#### [grunt-eslint](https://github.com/sindresorhus/grunt-eslint/)

```js
grunt.initConfig({
	eslint: {
		options: {
			format: 'node_modules/eslint-json/json.js'
		},
		target: ['file.js']
	}
});

grunt.loadNpmTasks('grunt-eslint');
grunt.registerTask('default', ['eslint']);
```


## Example output

```json
{
	"config": {},
	"results": [
		{
			"filePath": "test.js",
			"messages": [
				{
					"ruleId": "no-undef",
					"node": {
						"type": "Identifier",
						"name": "require",
						"range": [
							27,
							34
						],
						"loc": {
							"start": {
								"line": 2,
								"column": 13
							},
							"end": {
								"line": 2,
								"column": 20
							}
						}
					},
					"message": "'require' is not defined.",
					"line": 2,
					"column": 13,
					"source": "require"
				}
			]
		}
	]
}
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
