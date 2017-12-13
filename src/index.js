'use strict'

const glob = require("glob")
const renameExtension = require('rename-extension')
const looksSame = require("looks-same")

const resembleImages = function(pattern, cwd) {

	let paths = glob.sync(pattern, {cwd});

	console.log(paths)

	paths.map((refPath) => {

		const testPath = refPath.replace('reference', 'test');
		const diffPath = refPath.replace('reference', 'diff');

		console.log(testPath)
		console.log(diffPath)

		looksSame.createDiff({
			reference: refPath,
			current: testPath,
			diff: diffPath,
			highlightColor: '#ff00ff', //color to highlight the differences
			strict: true,//strict comparsion
		}, function(error) {});

		console.log('createDiff')

	})

}

module.exports = {
		test   : (pattern, cwd) => resembleImages(pattern, cwd)
}