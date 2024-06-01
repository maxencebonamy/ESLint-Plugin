// eslint-disable-next-line no-undef
module.exports = {
	extends: [
		"plugin:react/recommended"
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		"react",
		"@stylistic"
	],
	settings: {
		react: {
			version: "detect"
		}
	},
	rules: {
		// spacing
		"@stylistic/jsx-child-element-spacing": [ "off" ],
		"@stylistic/jsx-equals-spacing": [ "warn", "never" ],
		"@stylistic/jsx-props-no-multi-spaces": [ "warn" ],
		"@stylistic/jsx-tag-spacing": [ "warn", {
			closingSlash: "never",
			beforeSelfClosing: "proportional-always",
			afterOpening: "never",
			beforeClosing: "never"
		} ],

		// line breaks
		"@stylistic/jsx-first-prop-new-line": [ "warn", "multiline" ],
		"@stylistic/jsx-function-call-newline": [ "warn", "multiline" ],
		"@stylistic/jsx-newline": [ "off" ],

		// brackets
		"@stylistic/jsx-closing-bracket-location": [ "warn", "line-aligned" ],
		"@stylistic/jsx-curly-brace-presence": [ "warn", "never" ],
		"@stylistic/jsx-curly-newline": [ "warn", "consistent" ],
		"@stylistic/jsx-curly-spacing": [ "warn", { when: "never", children: { when: "always" } } ],
		"@stylistic/jsx-wrap-multilines": [ "warn", {
			declaration: "parens-new-line",
			assignment: "parens-new-line",
			return: "parens-new-line",
			arrow: "parens-new-line",
			condition: "parens-new-line",
			logical: "parens-new-line",
			prop: "ignore",
			propertyValue: "parens-new-line"
		} ],

		// indent
		"@stylistic/jsx-indent-props": [ "warn", "tab" ],
		"@stylistic/jsx-indent": [ "warn", "tab" ],

		// quotes
		"@stylistic/jsx-quotes": [ "warn", "prefer-double" ],

		// other
		"@stylistic/jsx-closing-tag-location": [ "warn" ],
		"@stylistic/jsx-max-props-per-line": [ "off" ],
		"@stylistic/jsx-one-expression-per-line": [ "off" ],
		"@stylistic/jsx-pascal-case": [ "warn" ],
		"@stylistic/jsx-self-closing-comp": [ "warn" ],
		"@stylistic/jsx-sort-props": [ "off" ],

		// react
		"react/react-in-jsx-scope": [ "off" ]
	}
}
