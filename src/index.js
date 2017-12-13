'use strict'

const glob = require('glob')
const renameExtension = require('rename-extension')
const looksSame = require('looks-same')

const resembleImages = function(pattern, cwd) {

	let paths = glob.sync(pattern, {cwd});

	console.log(paths)

	paths.map((refPath) => {

		const testDir = cwd.replace('reference', 'test');
		const diffDir = cwd.replace('reference', 'diff');

		const referencePath = cwd + refPath
		const testPath = testDir + refPath
		const diffPath = diffDir + refPath

		// looksSame.createDiff({
		// 	reference: cwd + refPath,
		// 	current: testDir + refPath,
		// 	diff: diffDir + refPath,
		// 	highlightColor: '#ff00ff', //color to highlight the differences
		// 	strict: true,//strict comparsion
		// }, function(err) {
    //
		// 	console.log(err);
    //
		// });

		looksSame(referencePath, testPath, function(error, equal) {
			if(equal !== true) {
				console.log('diff!')
				looksSame.createDiff({
					reference: referencePath,
					current: testPath,
					diff: diffPath,
					highlightColor: '#ff00ff', //color to highlight the differences
					strict: true,//strict comparsion
				}, function(err) {

					console.log(err);

				});
			}
		});



	})

}

module.exports = {
		test   : (pattern, cwd) => resembleImages(pattern, cwd)
}