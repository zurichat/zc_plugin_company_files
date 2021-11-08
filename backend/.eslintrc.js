module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['google', 'prettier', 'plugin:json/recommended'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'comma-dangle': ['off'],
		'comma-style': ['error', 'first', { exceptions: { ArrayExpression: true, ObjectExpression: true, FunctionDeclaration: true } }],
		'arrow-body-style': 'off',
		'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
		'prefer-const': ['error'],
		'no-var': ['error'],
		'no-new-object': ['error'],
		'object-shorthand': ['error'],
		'quote-props': ['error'],
		'prefer-object-spread': ['error'],
		'array-callback-return': ['error'],
		'eol-last': ['error', 'never'],
		'prefer-destructuring': [
			'error',
			{
				array: true,
				object: true,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		'quotes': [2, 'single', { allowTemplateLiterals: true }],
		'prefer-template': ['error'],
		'no-useless-escape': ['error'],
		'prefer-rest-params': ['error'],
		'no-new-func': ['error'],
		'brace-style': ['error'],
		'no-param-reassign': ['error'],
		'prefer-spread': ['error'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'indent': ['error', 'tab', {'VariableDeclarator': 0}],
		'prefer-arrow-callback': ['error'],
		'implicit-arrow-linebreak': ['error'],
		'no-useless-constructor': ['error'],
		'semi': ['off'],
		'eol-last': 0,
		'new-cap': ['off'],
		'no-param-reassign': ['off'],
		'require-jsdoc': ['off'], // For now
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }]
	}
};
