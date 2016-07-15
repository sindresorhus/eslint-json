# eslint-json [![Build Status](https://travis-ci.org/sindresorhus/eslint-json.svg?branch=master)](https://travis-ci.org/sindresorhus/eslint-json)

> JSON reporter for [ESLint](http://eslint.org)

Makes it easy to use ESLint with other tools.


## Install

```
$ npm install --save-dev eslint-json
```


## Usage

#### ESLint CLI

```
$ eslint --format=node_modules/eslint-json file.js
```

#### [grunt-eslint](https://github.com/sindresorhus/grunt-eslint)

```js
grunt.initConfig({
	eslint: {
		options: {
			format: 'node_modules/eslint-json'
		},
		target: ['file.js']
	}
});

grunt.loadNpmTasks('grunt-eslint');
grunt.registerTask('default', ['eslint']);
```


## Example output

```json
[
	{
		"filePath": "/Users/sindresorhus/dev/eslint-json/index.js",
		"messages":[
			{
				"ruleId": "no-warning-comments",
				"severity": 1,
				"message": "Unexpected 'todo' comment.",
				"line": 8,
				"column": 2,
				"nodeType": "Line",
				"source": "\t// TODO: fix this later"
			}
		],
		"errorCount": 0,
		"warningCount": 1
	}
]
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
