module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{json,html,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};