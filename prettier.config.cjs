/** @type {import('prettier').Config} */
module.exports = {
	endOfLine: "lf",
	semi: true,
	singleQuote: false,
	useTabs: true,
	tabWidth: 4,
	printWidth: 120,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
