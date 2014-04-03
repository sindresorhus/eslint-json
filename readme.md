# eslint-json [![Build Status](https://travis-ci.org/sindresorhus/eslint-json.svg?branch=master)](https://travis-ci.org/sindresorhus/eslint-json)

> JSON reporter for [ESLint](https://github.com/nzakas/eslint/)

Makes it easy to use ESLint with other tools.


## Install

```bash
$ npm install --save-dev eslint-json
```


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
			format: require('eslint-json')
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

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
