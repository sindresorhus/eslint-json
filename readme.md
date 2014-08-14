# eslint-json [![Build Status](https://travis-ci.org/sindresorhus/eslint-json.svg?branch=master)](https://travis-ci.org/sindresorhus/eslint-json)

> JSON reporter for [ESLint](https://github.com/nzakas/eslint/)

Makes it easy to use ESLint with other tools.


## Install

```sh
$ npm install --save-dev eslint-json
```


## Getting started

Use it with:

#### ESLint CLI

```sh
$ eslint --format node_modules/eslint-json/json.js file.js
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
	"results": [
		{
			"filePath": "test.js",
			"messages": [
				{
					"ruleId": "no-undef",
					"severity": 2,
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
