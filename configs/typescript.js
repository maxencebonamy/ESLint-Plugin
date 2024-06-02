// eslint-disable-next-line no-undef
module.exports = {
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true
	},
	plugins: [
		"@typescript-eslint/eslint-plugin",
		"@stylistic"
	],
	rules: {
		// spacing
		"@stylistic/type-generic-spacing": [ "warn" ],
		"@stylistic/type-named-tuple-spacing": [ "warn" ],
		"@stylistic/type-annotation-spacing": [ "warn", { before: false, after: true, overrides: { arrow: { before: true, after: true } } } ],

		// misc
		"@stylistic/member-delimiter-style": [ "warn", {
			multiline: {
				delimiter: "none"
			},
			singleline: {
				delimiter: "comma",
				requireLast: false
			}
		} ],

		// typescript
		"@typescript-eslint/consistent-type-exports": [ "warn" ],
		"@typescript-eslint/consistent-type-imports": [ "warn", { fixStyle: "separate-type-imports" } ],
		"@typescript-eslint/explicit-function-return-type": [ "warn", { allowExpressions: true, allowTypedFunctionExpressions: true } ],
		"@typescript-eslint/consistent-type-definitions": [ "warn", "type" ],
		"@typescript-eslint/no-non-null-assertion": [ "warn" ],
		"@typescript-eslint/array-type": [ "warn", { default: "array" } ],
		"@typescript-eslint/prefer-optional-chain": [ "warn" ]
	}
}
